import { ITeamMembers, ITeamService  } from '../interfaces';

export default class MockHttpClient  {

    private static _items: ITeamMembers[] = [{ Title: 'Applications Manager', Id: 1, EmpName: 'James Butcher', ApplicationsSupported: 'Marval, JIRA', PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png', WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$1576.htmld#TABINDEX=0&SUBTABINDEX=0' },
                                        { Title: 'Application Analyst', Id: 2, EmpName: 'Jodie Haughton', ApplicationsSupported: 'Marval, JIRA' , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png', WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$2566.htmld#TABINDEX=0&SUBTABINDEX=0' },
                                        { Title: 'Application Support Analyst', Id: 3, EmpName: 'Chris Negus', ApplicationsSupported: 'Marval, JIRA', PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png', WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$2566.htmld#TABINDEX=0&SUBTABINDEX=0' },
                                        { Title: 'IT Trainer', Id: 4, EmpName: 'Gavin Middleton', ApplicationsSupported: 'Marval, JIRA', PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png' , WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$2566.htmld#TABINDEX=0&SUBTABINDEX=0'},
                                        { Title: 'Application Analyst', Id: 5, EmpName: 'Sef James', ApplicationsSupported: 'Cignon, MS Project, Workday, JIRA, SharePoint' , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png', WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$2566.htmld#TABINDEX=0&SUBTABINDEX=0' },
                                        { Title: 'Senior Software Engineer', Id: 6, EmpName: 'Leandro Quemada', ApplicationsSupported:'Marval, JIRA', PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png', WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$2566.htmld#TABINDEX=0&SUBTABINDEX=0'  },
                                        { Title: 'Senior Software Engineer', Id: 7, EmpName: 'Luis Rana', ApplicationsSupported: 'Marval, JIRA', PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png', WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$2566.htmld#TABINDEX=0&SUBTABINDEX=0' },
                                        { Title: 'Data Analyst', Id: 8, EmpName: 'Cherry Cruz', ApplicationsSupported: 'Marval, JIRA' , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png', WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$2566.htmld#TABINDEX=0&SUBTABINDEX=0' },
                                        { Title: 'Application Support Analyst', Id: 9, EmpName: 'Cristina Abellera', ApplicationsSupported: 'Marval, JIRA', PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png' , WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$2566.htmld#TABINDEX=0&SUBTABINDEX=0' },
                                        { Title: 'Software Engineer', Id: 10, EmpName: 'Page Flourin Tangalin', ApplicationsSupported: 'Marval, JIRA' , PhotoUrl: '/src/webparts/meetTheTeam/static/speaker-1.png', PhotoUrlHover:'/src/webparts/meetTheTeam/static/speaker-1-hover.png' , WorkdayProfile: 'https://wd3.myworkday.com/cambridge/d/inst/autocompletesearch/247$2566.htmld#TABINDEX=0&SUBTABINDEX=0'}
                                    ];
    
    public static get(): Promise<ITeamMembers[]> {
    return new Promise<ITeamMembers[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }

    public static hide() {
            
    }
}