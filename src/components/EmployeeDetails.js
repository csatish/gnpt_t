import React, {Component} from 'react'
import {connect} from 'react-redux'
import {employeeSelect} from '../selectors/employeeSelector'
import {Spinner, SpinnerSize, Image, Label} from 'office-ui-fabric-react'


class EmployeeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        let user = this.props.user
        return (
                <div className="content-x-center">
                    <div className="content-dim shadow-box">
                        <div className="content-dim padding50">
                            {this.props.isFetching ? (<Spinner size={SpinnerSize.large} label={'Loading...'}/>) : null}
                            <div className="content-x-center">
                                <Image
                                    src={user.get('avatar')}
                                    width={128}
                                    height={128}
                                    style={{margin:"auto"}}
                                />
                            </div>
                            <Label style={{float: "left"}}>ID:{user.get('id')}</Label>
                            <Label style={{float: "right"}}>Name:{user.get('first_name')} {user.get('last_name')}</Label>
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect(employeeSelect)(EmployeeDetails)