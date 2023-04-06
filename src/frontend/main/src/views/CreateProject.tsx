import React from 'react';
import '../styles/home.css';
import CoreModules from "../shared/CoreModules";
import UploadArea from "../components/createproject/UploadArea";
import { useLocation, Link } from 'react-router-dom';
import ProjectDetailsForm from "../components/createproject/ProjectDetailsForm";
import BasemapSelection from '../components/createproject/BasemapSelection';

const CreateProject: React.FC = () => {
  const location = useLocation();
  const boxSX = {
    "button:hover": {
      textDecoration: 'none'
    },
  };
  return (
    <div style={{ padding: 7 }}>
      <CoreModules.Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
        <CoreModules.Typography
          variant="subtitle2"
          color={'info'}
          noWrap
          sx={{ display: { xs: 'none', sm: 'block', } }}
          ml={'3%'}
        >
          Create New Project
        </CoreModules.Typography>
        <CoreModules.Box sx={{ height: location.pathname !== '/create-project' ? '8px' : '12px', width: '64px', background: location.pathname !== '/create-project' ? '#68707F' : '#D73F3F', mx: '16px', borderRadius: '10px' }}></CoreModules.Box>
        <CoreModules.Box sx={{ height: location.pathname !== '/upload-area' ? '8px' : '12px', width: '64px', background: location.pathname !== '/upload-area' ? '#68707F' : '#D73F3F', mx: '16px', borderRadius: '10px' }}></CoreModules.Box>
        <CoreModules.Box sx={{ height: location.pathname !== '/basemap-selection' ? '8px' : '12px', width: '64px', background: location.pathname !== '/basemap-selection' ? '#68707F' : '#D73F3F', mx: '16px', borderRadius: '10px' }}></CoreModules.Box>
      </CoreModules.Stack>
      <CoreModules.Stack sx={{ paddingLeft: '13rem', paddingTop: '6rem' }} direction="row" spacing={13}>

        <CoreModules.Stack spacing={2}>
          {/* Project Details SideBar Button for Creating Project */}
          <Link to="/create-project">
            <CoreModules.Button
              variant="contained"
              color="error"
              disabled={location.pathname !== '/create-project'}
            >
              Project Details
            </CoreModules.Button>
          </Link>

          {/* END */}

          {/* Upload Area SideBar Button for uploading Area page  */}
          <Link to="/upload-area">
            <CoreModules.Button
              sx={boxSX}
              variant="contained"
              color="error"
              disabled={location.pathname !== '/upload-area'}
            >
              Upload Area
            </CoreModules.Button>
          </Link>
          {/* END */}

          {/* Basemap Selection of Project Boundary   */}
          <Link to="/basemap-selection">
            <CoreModules.Button
              sx={boxSX}
              variant="contained"
              color="error"
              disabled={location.pathname !== '/basemap-selection'}
            >
              Basemap Selection
            </CoreModules.Button>
          </Link>
          {/* END */}

        </CoreModules.Stack>
        {/* Showing Different Create Project Component When the url pathname changes */}

        {location.pathname === "/create-project" ? <ProjectDetailsForm /> : null}
        {location.pathname === "/upload-area" ? <UploadArea /> : null}
        {location.pathname === "/basemap-selection" ? <BasemapSelection /> : null}
        {/* END */}

      </CoreModules.Stack>

    </div >
  )

}

export default CreateProject;