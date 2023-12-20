import { Button } from '@mui/material';
import OTextField from '../../components/forms/OTextField';
import { FieldValues, useForm } from 'react-hook-form';
import ElasticService, { ElasticsearchCluster } from '../../services/ElasticService';
import { useSnackbar } from 'notistack';

const URI_DEFAULT_VALUE = 'http://localhost:9210';

function SetupPage() {

	const { control, handleSubmit } = useForm();

	const { enqueueSnackbar } = useSnackbar();

	const onSubmit = async (data: FieldValues) => {
		ElasticService.getInstance().setInstance(data as ElasticsearchCluster)
		const resp = await ElasticService.getInstance().ping();
		if (resp) {
			enqueueSnackbar('Connection success!', { variant: 'success' })
		}
	}

	return (
		<div className='w-full h-screen flex items-center'>
			<div className='w-full flex flex-col gap-4 p-4 bg-slate-700 rounded-lg'>
				<h1 className='text-2xl uppercase'>Setup</h1>
				<div className='w-full flex flex-row gap-4'>
					<OTextField controller={{
						name: 'username',
						control
					}} className='w-1/2' label='Username (optional)' />
					<OTextField controller={{
						name: 'password',
						control
					}} className='w-1/2' label='Password or endcoded API key (optional)' type='password' />
				</div>
				<OTextField controller={{
					name: 'host',
					control,
					defaultValue: URI_DEFAULT_VALUE
				}} label='Host' />
				<div className='flex gap-x-4'>
					<Button onClick={handleSubmit(onSubmit)} variant="contained">Test connection</Button>
					<Button variant="contained">Connect</Button>
				</div>
			</div>
		</div>
	);
}

SetupPage.displayName = 'SetupPage';

export default SetupPage;