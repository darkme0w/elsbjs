import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';

interface EventResponse extends Event {
    detail: any
}

function FuseLoadingBar() {

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(()=> {
        let processListend: any;
        let onReqErrorListend: any;
        const handleOnProcess = (e: Event) => {
            const resp = e as EventResponse;
            setLoading(resp.detail === 'loading')
        }
        const handleOnReqError = (e: Event) => {
            const resp = e as EventResponse;
            enqueueSnackbar(resp.detail, {variant: 'error'})
        }

        if(typeof window !== undefined) {
            processListend = window.addEventListener('onProcess', handleOnProcess)
            onReqErrorListend = window.addEventListener('onReqError', handleOnReqError)    
        }
        return () => {
            if(processListend) {
                //@ts-ignore
                processListend.removeEventListener('onProcess', handleOnProcess)
            }

            if(onReqErrorListend) {
                //@ts-ignore
                onReqErrorListend.removeEventListener('onReqError', handleOnReqError)
            }
        }
    }, [])

    return (
        <>
            <LinearProgress variant="determinate" value={0} />
        </>
    );
}

export default React.memo(FuseLoadingBar);