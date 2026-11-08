'use client';

import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Web3ProviderInterface } from '@gitroom/frontend/components/launches/web3/web3.provider.interface';
import { useFetch } from '@gitroom/helpers/utils/custom.fetch';
import { timer } from '@gitroom/helpers/utils/timer';
import { Button } from '@gitroom/react/form/button';
import { useT } from '@gitroom/react/translation/get.transation.service.client';

type GroupItem = { id: string; name: string };

export const WhatsappProvider: FC<Web3ProviderInterface> = (props) => {
  const { onComplete, nonce } = props;
  const fetch = useFetch();
  const t = useT();
  const stop = useRef(false);
  const [status, setStatus] = useState('STARTING');
  const [qr, setQr] = useState<string>('');
  const [groups, setGroups] = useState<GroupItem[]>([]);
  const [error, setError] = useState('');
  const [loadingGroups, setLoadingGroups] = useState(false);

  const loadGroups = useCallback(async () => {
    setLoadingGroups(true);
    setError('');
    try {
      const data = await (await fetch('/integrations/whatsapp/groups')).json();
      if (data?.error) {
        setError(data.error);
        setGroups([]);
        return;
      }
      setGroups(Array.isArray(data?.groups) ? data.groups : []);
    } catch (err: any) {
      setError(err?.message || 'Failed to load groups');
    } finally {
      setLoadingGroups(false);
    }
  }, [fetch]);

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
              await loadGroups();
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
          <div className="text-center font-medium">
            {t('select_whatsapp_group', 'Select a WhatsApp group:')}
          </div>
          <div className="w-full flex justify-end">
            <Button onClick={loadGroups} disabled={loadingGroups}>
              {t('refresh', 'Refresh')}
            </Button>
          </div>
          <div className="w-full max-h-[280px] overflow-auto flex flex-col gap-[8px]">
            {groups.length === 0 && !loadingGroups ? (
              <div className="text-sm opacity-70 text-center">
                {t(
                  'no_whatsapp_groups',
                  'No groups found. Click Refresh once. If it stays empty, close and scan the QR again.'
                )}
              </div>
            ) : (
              groups.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className="text-left px-[12px] py-[10px] rounded-[6px] bg-newBgColorInner hover:opacity-90"
                  onClick={() => onComplete(encodeURIComponent(g.id), nonce)}
                >
                  {g.name}
                </button>
              ))
            )}
          </div>
        </>
      )}
      {error ? <div className="text-red-500 text-sm text-center">{error}</div> : null}
    </div>
  );
};
