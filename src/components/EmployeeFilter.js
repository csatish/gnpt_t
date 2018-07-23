import React, {Component} from 'react'
import {connect} from 'react-redux'
import {departmentListSelect} from '../selectors/employeeSelector'
import {setSelectedEmployee, getEmployeeDetails} from '../actions/employeeFilterAction'
import EmployeeDetails from './EmployeeDetails'

import {Dropdown, DefaultButton} from 'office-ui-fabric-react'


class EmployeeFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedDept: "",
            employeeIds: [],
            selectedEmployee: "",
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {}
    }

    render() {
        const {selectedDept, selectedEmployee, employeeIds} = this.state
        let checked = false

        return (
            <div>
                <div className="content-x-center">
                    <div className="emp-filter-con content-dim">
                        <div style={{width: 200}}>
                            <Dropdown
                                label="Departments"
                                selectedKey={selectedDept}
                                onChanged={this.onDepartmentChange}
                                placeHolder="Select an Option"
                                options={this.props.departmentOptions}
                            />
                        </div>
                        <div style={{width: 200}}>
                            <Dropdown
                                label="Employee Id"
                                selectedKey={selectedEmployee}
                                onChanged={this.onEmployeeChange}
                                placeHolder="Select an Option"
                                options={employeeIds}
                            />
                        </div>
                        <DefaultButton
                            data-automation-id="getDetails"
                            allowDisabledFocus={true}
                            disabled={!selectedEmployee}
                            checked={checked}
                            text="Get Details"
                            onClick={this.getEmpDetails}
                        />

                        <DefaultButton
                            data-automation-id="clear"
                            allowDisabledFocus={true}
                            checked={checked}
                            text="Clear"
                            onClick={this.clearEmpDetails}
                        />
                    </div>
                </div>
                <EmployeeDetails/>
            </div>
        )
    }

    onDepartmentChange = (value) => {
        this.setState((state, props) => {
            let employeeIds = []
            let depts = props.departments
            for (let dept of depts) {
                if (value.key === dept.get('deptId')) {
                    let empIds = dept.get('employeeIds')
                    for (let empId of empIds) {
                        employeeIds.push({key: empId, text: empId})
                    }
                    break
                }
            }

            return {selectedDept: value.key, employeeIds: employeeIds, selectedEmployee: ""}
        })
    }

    onEmployeeChange = (value) => {
        this.setState(() => {
            return {selectedEmployee: value.key}
        })
    }

    getEmpDetails = () => {
        this.props.dispatch(setSelectedEmployee(this.state.selectedEmployee))
        this.props.dispatch(getEmployeeDetails(this.state.selectedEmployee))
    }

    clearEmpDetails = () => {
        this.props.dispatch(setSelectedEmployee(""))
        this.setState((state, props) => {
            return {selectedDept: "", employeeIds: [], selectedEmployee: ""}
        })
    }
}


export default connect(departmentListSelect)(EmployeeFilter)