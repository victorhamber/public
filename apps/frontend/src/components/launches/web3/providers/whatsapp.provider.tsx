'use client';

import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Web3ProviderInterface } from '@gitroom/frontend/components/launches/web3/web3.provider.interface';
import { useFetch } from '@gitroom/helpers/utils/custom.fetch';
import { timer } from '@gitroom/helpers/utils/timer';
import { Button } from '@gitroom/react/form/button';
import { Input } from '@gitroom/react/form/input';
import { useT } from '@gitroom/react/translation/get.transation.service.client';
import { useIntegrationList } from '@gitroom/frontend/components/launches/helpers/use.integration.list';
import { useToaster } from '@gitroom/react/toaster/toaster';
import clsx from 'clsx';

type GroupItem = { id: string; name: string };

export const WhatsappProvider: FC<Web3ProviderInterface> = (props) => {
  const { onComplete, nonce } = props;
  const fetch = useFetch();
  const t = useT();
  const toaster = useToaster();
  const stop = useRef(false);
  const { data: integrations } = useIntegrationList();
  const [status, setStatus] = useState('STARTING');
  const [qr, setQr] = useState<string>('');
  const [groups, setGroups] = useState<GroupItem[]>([]);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [loadingGroups, setLoadingGroups] = useState(false);
  const [saving, setSaving] = useState(false);

  const connectedIds = useMemo(() => {
    const set = new Set<string>();
    for (const item of integrations || []) {
      if (item?.identifier === 'whatsapp' && item?.internalId) {
        set.add(String(item.internalId));
      }
    }
    return set;
  }, [integrations]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return groups;
    }
    return groups.filter((g) => g.name.toLowerCase().includes(q));
  }, [groups, query]);

  const selectedNewCount = useMemo(
    () =>
      Object.entries(selected).filter(
        ([id, on]) => on && !connectedIds.has(id)
      ).length,
    [selected, connectedIds]
  );

  const loadGroups = useCallback(async () => {
    setLoadingGroups(true);
    setError('');
    try {
      const data = await (await fetch('/integrations/whatsapp/groups')).json();
      if (data?.error) {
        setError(data.error);
        setGroups([]);
        return 0;
      }
      const next = Array.isArray(data?.groups) ? data.groups : [];
      setGroups(next);
      setSelected((prev) => {
        const nextSel = { ...prev };
        for (const g of next) {
          if (connectedIds.has(g.id)) {
            nextSel[g.id] = true;
          }
        }
        return nextSel;
      });
      return next.length;
    } catch (err: any) {
      setError(err?.message || 'Failed to load groups');
      return 0;
    } finally {
      setLoadingGroups(false);
    }
  }, [fetch, connectedIds]);

  useEffect(() => {
    stop.current = false;
    const run = async () => {
      while (!stop.current) {
        try {
          const data = await (
            await fetch('/integrations/whatsapp/qr')
          ).json();
          if (data?.error) {
            setError(data.error);
          } else {
            setError('');
            setStatus(data.status || 'UNKNOWN');
            if (data.qr) {
              setQr(data.qr);
            }
            if (data.status === 'WORKING') {
              setQr('');
              for (let i = 0; i < 10; i++) {
                if (stop.current) {
                  return;
                }
                const count = await loadGroups();
                if (count > 0) {
                  return;
                }
                await timer(2000);
              }
              return;
            }
          }
        } catch (err: any) {
          setError(err?.message || 'WAHA unavailable');
        }
        await timer(2500);
      }
    };
    run();
    return () => {
      stop.current = true;
    };
  }, [fetch, loadGroups]);

  const toggle = useCallback(
    (id: string) => {
      if (connectedIds.has(id)) {
        return;
      }
      setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
    },
    [connectedIds]
  );

  const connectSelected = useCallback(async () => {
    const ids = Object.entries(selected)
      .filter(([id, on]) => on && !connectedIds.has(id))
      .map(([id]) => id);
    if (!ids.length) {
      toaster.show(
        t('select_at_least_one_group', 'Select at least one new group'),
        'warning'
      );
      return;
    }
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/integrations/whatsapp/connect-groups', {
        method: 'POST',
        body: JSON.stringify({ groupIds: ids, state: nonce }),
      });
      const data = await res.json();
      if (!res.ok || data?.error) {
        setError(data?.error || 'Failed to connect groups');
        return;
      }
      // Keep the existing OAuth redirect contract for the first new group so
      // the parent closes and refreshes the channel list.
      onComplete(encodeURIComponent(ids[0]), nonce);
    } catch (err: any) {
      setError(err?.message || 'Failed to connect groups');
    } finally {
      setSaving(false);
    }
  }, [selected, connectedIds, fetch, nonce, onComplete, t, toaster]);

  return (
    <div className="justify-center items-center flex flex-col pt-[16px] gap-[16px] w-full">
      {status !== 'WORKING' ? (
        <>
          <div className="text-center">
            {t(
              'scan_whatsapp_qr',
              'Scan this QR code with WhatsApp on the publishing phone.'
            )}
          </div>
          {qr ? (
            <img
              src={qr}
              alt="WhatsApp QR"
              className="w-[240px] h-[240px] bg-white rounded-[8px] p-[8px]"
            />
          ) : (
            <div className="text-sm opacity-70">
              {t('waiting_qr', 'Waiting for QR…')} ({status})
            </div>
          )}
        </>
      ) : (
        <>
          <div className="text-center font-medium w-full">
            {t('select_whatsapp_group', 'Select WhatsApp groups:')}
          </div>
          <div className="w-full flex gap-[8px] items-end">
            <div className="flex-1">
              <Input
                label=""
                name="whatsapp-group-search"
                disableForm={true}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('search_groups', 'Search groups by name')}
              />
            </div>
            <Button onClick={loadGroups} disabled={loadingGroups || saving}>
              {t('refresh', 'Refresh')}
            </Button>
          </div>
          <div className="w-full max-h-[320px] overflow-auto flex flex-col gap-[6px]">
            {filtered.length === 0 && !loadingGroups ? (
              <div className="text-sm opacity-70 text-center">
                {t(
                  'no_whatsapp_groups',
                  'Groups are still syncing. Wait a few seconds and click Refresh.'
                )}
              </div>
            ) : (
              filtered.map((g) => {
                const already = connectedIds.has(g.id);
                const checked = already || !!selected[g.id];
                return (
                  <label
                    key={g.id}
                    className={clsx(
                      'flex items-center gap-[10px] px-[12px] py-[10px] rounded-[6px] bg-newBgColorInner',
                      already ? 'opacity-70' : 'cursor-pointer hover:opacity-90'
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={already || saving}
                      onChange={() => toggle(g.id)}
                    />
                    <span className="flex-1 text-left">{g.name}</span>
                    {already ? (
                      <span className="text-xs text-green-400">
                        {t('already_connected', 'Connected')}
                      </span>
                    ) : null}
                  </label>
                );
              })
            )}
          </div>
          <Button
            onClick={connectSelected}
            disabled={saving || selectedNewCount === 0}
            className="w-full"
          >
            {saving
              ? t('connecting', 'Connecting…')
              : t(
                  'connect_selected_groups',
                  `Connect selected (${selectedNewCount})`
                )}
          </Button>
        </>
      )}
      {error ? <div className="text-red-500 text-sm text-center">{error}</div> : null}
    </div>
  );
};
