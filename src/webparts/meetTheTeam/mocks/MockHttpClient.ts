import { ITeamMembers, ITeamService  } from '../interfaces';

export default class MockHttpClient  {

    private static _items: ITeamMembers[] = [{ Title: 'Application Analyst', Id: 1, Name: 'James Butcher', ApplicationsSupported: ['Marval', 'JIRA'], PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png' },
                                        { Title: 'Application Analyst', Id: 2, Name: 'Jodie Haughton', ApplicationsSupported: ['Marval', 'JIRA'] , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png' },
                                        { Title: 'Application Analyst', Id: 3, Name: 'Chris Negus', ApplicationsSupported: ['Marval', 'JIRA'] , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png' },
                                        { Title: 'Application Analyst', Id: 4, Name: 'Gavin Middleton', ApplicationsSupported: ['Marval', 'JIRA'], PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png' },
                                        { Title: 'Application Analyst', Id: 5, Name: 'Sef James', ApplicationsSupported: ['Marval', 'JIRA'] , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png' },
                                        { Title: 'Application Analyst', Id: 6, Name: 'Leandro Quemada', ApplicationsSupported: ['Marval', 'JIRA'], PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png'  },
                                        { Title: 'Application Analyst', Id: 7, Name: 'Luis Rana', ApplicationsSupported: ['Marval', 'JIRA'] , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png' },
                                        { Title: 'Application Analyst', Id: 8, Name: 'Cherry Cruz', ApplicationsSupported: ['Marval', 'JIRA'] , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png' },
                                        { Title: 'Application Analyst', Id: 9, Name: 'Cristina Abellera', ApplicationsSupported: ['Marval', 'JIRA'], PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png'  },
                                        { Title: 'Application Analyst', Id: 10, Name: 'Page Flourin Tangalin', ApplicationsSupported: ['Marval', 'JIRA'] , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png' }
                                    ];
    
    public static get(): Promise<ITeamMembers[]> {
    return new Promise<ITeamMembers[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }

    public static hide() {
            
    }
}