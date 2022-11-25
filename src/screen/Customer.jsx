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
            <ScreenTitle pageTitle='Customer' />
            <PanelCard>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <TextInput
                                label="First Name"
                                ref={{ ...register("firstName", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.firstName)}
                                helperText={errors.firstName && <FieldErrorMsg errorMsg={errors.firstName.message} />}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput
                                label="Midle Name"
                                ref={{ ...register("midleName", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.midleName)}
                                helperText={errors.midleName && <FieldErrorMsg errorMsg={errors.midleName.message} />}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextInput
                                label="Last Name"
                                ref={{ ...register("lastName", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.lastName)}
                                helperText={errors.lastName && <FieldErrorMsg errorMsg={errors.lastName.message} />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextInput
                                label="First Name"
                                ref={{ ...register("field_1", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.field_1)}
                                helperText={errors.field_1 && <FieldErrorMsg errorMsg={errors.field_1.message} />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextInput
                                label="First Name"
                                ref={{ ...register("field_2", { required: "Product Name is required*" }) }}
                                error={Boolean(errors.field_2)}
                                helperText={errors.field_2 && <FieldErrorMsg errorMsg={errors.field_2.message} />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl
                                fullWidth
                                error={Boolean(errors.fleid_3)}
                            >
                                <InputLabel id="label1">Age</InputLabel>
                                <Controller
                                    render={() => (
                                        <Select
                                            labelId="label1"
                                            label="Age"
                                            value={0}

                                        >
                                            <MenuItem value={0}>None</MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    )

                                    }

                                    control={control}
                                    name='fleid_3'
                                    rules={{
                                        required: 'This is required'
                                    }}
                                />
                                {errors.fleid_3 && <FormHelperText>
                                    <FieldErrorMsg errorMsg={errors.fleid_3?.message} />
                                </FormHelperText>}

                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl
                                fullWidth
                                error={Boolean(errors.fleid_4)}
                            >
                                <InputLabel id="label_4">Age</InputLabel>
                                <Controller
                                    render={() => (
                                        <Select
                                            labelId="label_4"
                                            label="Age"
                                            value={0}

                                        >
                                            <MenuItem value={0}>None</MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    )

                                    }

                                    control={control}
                                    name='fleid_4'
                                    rules={{
                                        required: 'This is required'
                                    }}
                                />
                                {errors.fleid_4 && <FormHelperText>
                                    <FieldErrorMsg errorMsg={errors.fleid_4?.message} />
                                </FormHelperText>}

                            </FormControl>
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
        </>

    )
}

export default Customer