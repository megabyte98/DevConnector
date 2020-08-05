import React, { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Spinner from "../layout/spinner"
import DashboardActions from "./DashboardActions"
import Experience from "./Experience"
import Education from "./Education"
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile"


const Dashboard = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])
    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
            <i className='fas fa-user' /> Welcome {user && user.name}
        </p>
        <br/>
        {profile !== null ?
            (
                <Fragment>
                    <DashboardActions />
                     <br/>
                    <Experience experience={profile.experience} />
                     <br/>
                    <Education education={profile.education} />
                     <br/>
                    <div className='my-2'>
                     <br/>
                        <button onClick={() => deleteAccount()} className="btn btn-danger">
                            <i className="fas fa-user-minus"></i> Deactivate account
                        </button>
                    </div>
                </Fragment>) :
            (<Fragment><p>You have not yet setup a profile, please add some info</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>
                    Create Profile
          </Link></Fragment>)}
    </Fragment>;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
