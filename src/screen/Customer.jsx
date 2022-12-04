import { FormControl, InputLabel, MenuItem, Select, Button, Grid, FormHelperText } from '@mui/material'
import React from 'react'
import PanelCard from '../components/card/PanelCard'
import { TextInput } from '../components/Form/TextInput'
import ScreenTitle from '../components/screenTitle/ScreenTitle'
import { Controller, useForm } from 'react-hook-form';

const FieldErrorMsg = ({ errorMsg }) => {
    return (
        <>
            <i className="fas fa-exclamation-circle mr-1"></i>
            <span>
                {errorMsg}
            </span>
        </>
    )
}
const Customer = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <>

            <ScreenTitle pageTitle='Gestion de clients' />
            <PanelCard>
                <h1>Ajouter un clients</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextInput

                                label="Nom"
                                ref={{ ...register("firstName", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.firstName)}
                                helperText={errors.firstName && <FieldErrorMsg errorMsg={errors.firstName.message} />}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput
                                label="Prénom"
                                ref={{ ...register("midleName", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.midleName)}
                                helperText={errors.midleName && <FieldErrorMsg errorMsg={errors.midleName.message} />}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextInput
                                label="Adresse"
                                ref={{ ...register("field_1", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.field_1)}
                                helperText={errors.field_1 && <FieldErrorMsg errorMsg={errors.field_1.message} />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextInput
                                label="Numéro de téléphone"
                                ref={{ ...register("field_2", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.field_2)}
                                helperText={errors.field_2 && <FieldErrorMsg errorMsg={errors.field_2.message} />}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <div className="float-right">

                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >Send
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </PanelCard>
            <br></br>

            <PanelCard>
                <h1>Modifier un clients</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextInput

                                label="Nom"
                                ref={{ ...register("firstName", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.firstName)}
                                helperText={errors.firstName && <FieldErrorMsg errorMsg={errors.firstName.message} />}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput
                                label="Prénom"
                                ref={{ ...register("midleName", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.midleName)}
                                helperText={errors.midleName && <FieldErrorMsg errorMsg={errors.midleName.message} />}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextInput
                                label="Adresse"
                                ref={{ ...register("field_1", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.field_1)}
                                helperText={errors.field_1 && <FieldErrorMsg errorMsg={errors.field_1.message} />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextInput
                                label="Numéro de téléphone"
                                ref={{ ...register("field_2", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.field_2)}
                                helperText={errors.field_2 && <FieldErrorMsg errorMsg={errors.field_2.message} />}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <div className="float-right">

                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >Send
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </PanelCard>
            <br></br>
            <PanelCard>
                <h1>Supprimer un clients</h1>

                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className="float-right">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >Send
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </PanelCard>
        </>

    )
}

export default Customer