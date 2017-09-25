import { ITeamMembers } from '../interfaces/ITeamMembers';

export interface ITeamService {
  getPropertiesForCurrentUser: () => Promise<ITeamMembers>;
  getManagers: (userLoginNames: string[]) => Promise<ITeamMembers[]>;
  //getReports: (userLoginNames: string[]) => Promise<ITeamMembers[]>;
  getProfilePhoto: (photoUrl: string) => string;
}