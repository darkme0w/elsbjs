import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { UseControllerProps, useController } from "react-hook-form";

type OTextFieldProps = TextFieldProps & {
	controller: UseControllerProps;
}

function OTextField(props: OTextFieldProps) {

	const { field, fieldState } = useController(props.controller);

	const { error } = fieldState;

	const { onChange, value } = field;

	return (
		<TextField
			onChange={onChange}
			value={value}
			error={error ? true : false}
			helperText={error ? error?.message : undefined}
			{...props}
		/>
	);
}

export default React.memo(OTextField);