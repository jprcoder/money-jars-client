import React from 'react';
import SelectInput from '../SelectInput/select-input';
import {Field, reduxForm} from 'redux-form';
import {updateUserProfile} from '../../actions/index.actions';
import Button from '../Button/button';
import './choose-budget.css'


export class ChooseBudget extends React.Component {

    onSubmit(values){
        console.log(values.budget_id.value);
        const data = {budget_id: values.budget_id.value}
        this.props.dispatch(updateUserProfile(this.props.userId, data))
    }

    render(){
            console.log(this.props.data)
            return(
                <div className='choose-budget'>
                    <p> Now select a YNAB budget to use </p>
                    <form
                        className='choose-budget-form'
                        onSubmit={this.props.handleSubmit(values =>
                                this.onSubmit(values)
                        )}>
                        <Field
                            component={SelectInput}
                            type='text'
                            label='Budget'
                            name='budget_id'
                            options={this.props.data}
                        />
                        <Button
                            type='submit'
                            label='Assign'
                            className='form-button orange'
                        />
                    </form>
                </div>
            )
        }
}

export default reduxForm({form: 'choose-budget'})(ChooseBudget);