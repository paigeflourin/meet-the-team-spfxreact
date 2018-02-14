import * as React from 'react';
import styles from './MeetTheTeam.module.scss';
import { IMeetTheTeamProps } from './IMeetTheTeamProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ITeamMembers } from '../interfaces';
import MockHttpClient from '../mocks/MockHttpClient';
import Modal from 'react-modal';
import * as pnp from "sp-pnp-js"; 
import { AppSettings } from '../services/Settings';

import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome = require('react-fontawesome');



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
  modalIsOpen?: boolean;
}


const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class MeetTheTeam extends React.Component<IMeetTheTeamProps, ISPLists> {

  constructor(props: IMeetTheTeamProps) {
    super(props);

    this.state = {
      teamMembers: [],
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    console.log("Open Modal");
    this.setState({modalIsOpen: true});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  public render(): React.ReactElement<IMeetTheTeamProps> {
    
    return (
      <div> <h1> Business Productivity Team </h1> <Grid fluid={true}>
        { 
          this.state.teamMembers.map(function (member){
            console.log(member);
            console.log(this.state);
            return <div key={member.Id}  className={styles.colMd3} >
                <div key={member.Id}  className={styles.speakers}>
                      <a href="#" className={styles.memberprofile}>
                        <figure onClick={() => {this.openModal()}}> 
                          <div className={styles.unhoverimg}>
                            <img src={member.PhotoUrl} alt="" > 
                            </img>
                          </div>
                          <div className={styles.hoverimg}>
                            <img src={member.PhotoUrlHover} alt="" >
                            </img>
                          </div>
                        </figure>
                      
                        <h5>{member.Title}</h5>
                        <h4><span>{member.EmpName} </span> </h4>
                        <h5 className={styles.applicationSupported}> {member.ApplicationsSupported} </h5>
                      </a>	
                </div>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
        
                  <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                  <button onClick={this.closeModal}>close</button>
                  <div>I am a modal</div>
                  <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                  </form>
                </Modal>
              </div>
              
        }) 
        } </Grid> </div> 
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
        //new pnp.Web(AppSettings.SHAREPOINT_SITE_URL).lists.getByTitle('OurTeam').items.get().then((result: any) => {
             
         // }); // pnp.sp.web
         
          pnp.sp.web.lists.getByTitle("OurTeam").items.get().then((result) => {
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