import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { ProjectStateTypes } from '@/store/types/IProject';

const initialState: ProjectStateTypes = {
  projectLoading: true,
  projectTaskBoundries: [],
  newProjectTrigger: false,
  projectInfo: {},
  projectSubmissionLoading: false,
  projectSubmission: [],
  projectDataExtractLoading: false,
  downloadProjectFormLoading: { type: 'form', loading: false },
  generateProjectTilesLoading: false,
  tilesList: [],
  tilesListLoading: false,
  downloadTilesLoading: false,
  downloadDataExtractLoading: false,
  taskModalStatus: false,
  toggleGenerateMbTilesModal: false,
  mobileFooterSelection: 'explore',
  geolocationStatus: false,
  projectDetailsLoading: true,
  projectDashboardDetail: {
    project_name_prefix: '',
    organisation_name: '',
    total_tasks: null,
    created: '',
    organisation_logo: '',
    total_submission: null,
    total_contributors: null,
    last_active: '',
  },
  projectDashboardLoading: false,
};

const ProjectSlice = createSlice({
  name: 'project',
  initialState: initialState,
  reducers: {
    SetProjectTaskBoundries(state, action) {
      state.projectTaskBoundries = action.payload;
    },
    SetProjectLoading(state, action) {
      state.projectLoading = action.payload;
    },
    SetProjectInfo(state, action) {
      state.projectInfo = action.payload;
    },
    SetNewProjectTrigger(state) {
      state.newProjectTrigger = !state.newProjectTrigger;
    },
    clearProjects(state, action) {
      storage.removeItem('persist:project');
      state.projectTaskBoundries = action.payload;
    },
    GetProjectSubmissionLoading(state, action) {
      state.projectSubmissionLoading = action.payload;
    },
    SetProjectSubmission(state, action) {
      state.projectSubmission = action.payload;
    },
    SetDownloadProjectFormLoading(state, action) {
      state.downloadProjectFormLoading = action.payload;
    },
    SetGenerateProjectTilesLoading(state, action) {
      state.generateProjectTilesLoading = action.payload;
    },
    SetTilesList(state, action) {
      state.tilesList = action.payload;
    },
    SetTilesListLoading(state, action) {
      state.tilesListLoading = action.payload;
    },
    SetDownloadTileLoading(state, action) {
      state.downloadTilesLoading = action.payload;
    },
    SetDownloadDataExtractLoading(state, action) {
      state.downloadDataExtractLoading = action.payload;
    },
    ToggleTaskModalStatus(state, action) {
      state.taskModalStatus = action.payload;
    },
    ToggleGenerateMbTilesModalStatus(state, action) {
      state.toggleGenerateMbTilesModal = action.payload;
    },
    SetMobileFooterSelection(state, action) {
      state.mobileFooterSelection = action.payload;
    },
    ToggleGeolocationStatus(state, action) {
      state.geolocationStatus = action.payload;
    },
    SetProjectDetialsLoading(state, action) {
      state.projectDetailsLoading = action.payload;
    },
    SetProjectDashboardDetail(state, action) {
      state.projectDashboardDetail = action.payload;
    },
    SetProjectDashboardLoading(state, action) {
      state.projectDashboardLoading = action.payload;
    },
  },
});

export const ProjectActions = ProjectSlice.actions;
export default ProjectSlice;
