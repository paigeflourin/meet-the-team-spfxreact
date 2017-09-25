import * as React from 'react';
import styles from './MeetTheTeam.module.scss';
import { IMeetTheTeamProps } from './IMeetTheTeamProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ITeamMembers } from '../interfaces';
import MockHttpClient from '../mocks/MockHttpClient';

import * as pnp from "sp-pnp-js"; 
import { AppSettings } from '../services/Settings';


import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';
import {
  SPHttpClient,
  SPHttpClientResponse   
} from '@microsoft/sp-http';

export interface ISPLists {
  teamMembers?: ITeamMembers[];
}

export default class MeetTheTeam extends React.Component<IMeetTheTeamProps, ISPLists> {

  constructor(props: IMeetTheTeamProps) {
    super(props);

    this.state = {
      teamMembers: []
    };

  }


  public render(): React.ReactElement<IMeetTheTeamProps> {
    return (
      <div> 
        { 
          this.state.teamMembers.map(function (member){
            console.log(member);
            return <div className={styles.meetTheTeam}>
              <div className={styles.container}>
                <div> 
                  <h1> TEST!!!! </h1>
                  <div> {member.Name} </div>
                </div>
              </div>
            </div>
        }) 
        } </div>
    );
    
  }

  public componentDidMount(): void {
        // Local environment
        if (Environment.type === EnvironmentType.Local) {
          this._getMockListData().then((response) => {
            this.setState({ teamMembers : response.teamMembers });
              
          });
      }
      else if (Environment.type == EnvironmentType.SharePoint || Environment.type == EnvironmentType.ClassicSharePoint) {
          new pnp.Web(AppSettings.SHAREPOINT_SITE_URL).lists.getByTitle('OurTeam').items.get().then((result: any) => {
              console.log(result);
              this.setState({ teamMembers : result });
          });
      }
  }

  private _getMockListData(): Promise<ISPLists> {
    return MockHttpClient.get()
      .then((data: ITeamMembers[]) => {
        var listData: ISPLists = { teamMembers: data };
        return listData;
      }) as Promise<ISPLists>;
    }

}