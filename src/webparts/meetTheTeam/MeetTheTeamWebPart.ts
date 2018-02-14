import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as pnp from "sp-pnp-js"; 
import * as strings from 'meetTheTeamStrings';
import MeetTheTeam from './components/MeetTheTeam';
import { IMeetTheTeamProps } from './components/IMeetTheTeamProps';
import { IMeetTheTeamWebPartProps } from './IMeetTheTeamWebPartProps';

export default class MeetTheTeamWebPart extends BaseClientSideWebPart<IMeetTheTeamWebPartProps> {
  
  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      // establish SPFx context
      pnp.setup({
        spfxContext: this.context
      });

    });
  }
 
  public render(): void {
    const element: React.ReactElement<IMeetTheTeamProps > = React.createElement(
      MeetTheTeam,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
