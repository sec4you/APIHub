import React from 'react';
import { required, SimpleForm, TextInput, useTranslate } from 'react-admin';
import { makeStyles, Typography } from '@material-ui/core';
import { ResetPasswordToolbar } from './ResetPasswordToolbar';

export const ResetPasswordForm = props => {
    const { onSubmit = () => {}, toolbarProps, ...rest } = props;
    const classes = useStyles(rest);
    const translate = useTranslate();

    return (
        <div className={classes.root}>
            <Typography
                variant="subtitle1"
                color="textSecondary"
                className={classes.instructions}
            >
                {translate('apihub.reset_password.form_details.instructions')}
            </Typography>
            <Typography
                variant="subtitle2"
                color="textSecondary"
                className={classes.description}
                gutterBottom
            >
                {translate('apihub.reset_password.form_details.description')}
            </Typography>
            <SimpleForm
                className={classes.form}
                save={onSubmit}
                toolbar={<ResetPasswordToolbar {...toolbarProps} />}
                {...rest}
            >
                <TextInput
                    source="username"
                    type="text"
                    label="apihub.reset_password.fields.username"
                    variant="outlined"
                    fullWidth
                    validate={required()}
                    autoFocus
                />
            </SimpleForm>
        </div>
    );
};

const useStyles = makeStyles(
    theme => ({
        root: {},
        instructions: {
            paddingTop: theme.spacing(2),
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightBold,
        },
        description: {
            paddingBottom: theme.spacing(2),
        },
        form: {
            '& >:first-child': {
                padding: 0,
            },
        },
    }),
    {
        name: 'Layer7ResetPasswordForm',
    }
);
