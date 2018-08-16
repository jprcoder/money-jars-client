import React from 'react';
import {connect} from 'react-redux';
import Goal from '../Goal/goal';
import Header from '../Header/header';
import AddGoal from '../AddGoal/addgoal';

export class Child extends React.Component{
    constructor(){
        super()
        this.state = {
            addNew: false,
            label: 'New Goal'
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        console.log('edit state ran');
        if(this.state.addNew){
            this.setState({
                addNew: false,
                label: 'New Goal'
            })
        }
        else if(!this.state.addNew){
            this.setState({
                addNew: true,
                label: 'Close'
        })}
    }

    render(){
        console.log(this.props.goals);

        let goals = this.props.goals.map(goal =>
            <Goal key={goal.title} {...goal} />
        )

        let budgeted = 0;

        for(let i=0; i<goals.length; i++){
            budgeted = budgeted+this.props.goals[i].saved
        }

        let toBudget = (this.props.total)-budgeted;

        console.log(`toBudget: ${toBudget}`)

        return (
            <div className='child-page'>;
                <Header 
                    title={'Welcome [name]!'}
                    message={`You have $${toBudget} to give jobs to today`}
                    label={this.state.label}
                    onClick={this.handleClick}    
                />
                <AddGoal 
                    form='new-goal'
                    addNew={this.state.addNew}
                />
                <div>
                    {goals}
                </div>
            </div>
        )
    }
}
    
    const mapStatetoProps = state => ({
        goals: state.budget.goals,
        total: state.budget.total,
    });
    
    export default connect(mapStatetoProps)(Child)