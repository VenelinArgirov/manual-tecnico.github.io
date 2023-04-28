'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">traveller_dashboard documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-608ca76285489e4b30fefe59795dbd96328533ff212d1fe57b4ab7a18bfcefe3b251e9feafad4b63692e36d5e9a8b740210f1f5ea2e75af13a5fa62cab45fe0d"' : 'data-target="#xs-components-links-module-AppModule-608ca76285489e4b30fefe59795dbd96328533ff212d1fe57b4ab7a18bfcefe3b251e9feafad4b63692e36d5e9a8b740210f1f5ea2e75af13a5fa62cab45fe0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-608ca76285489e4b30fefe59795dbd96328533ff212d1fe57b4ab7a18bfcefe3b251e9feafad4b63692e36d5e9a8b740210f1f5ea2e75af13a5fa62cab45fe0d"' :
                                            'id="xs-components-links-module-AppModule-608ca76285489e4b30fefe59795dbd96328533ff212d1fe57b4ab7a18bfcefe3b251e9feafad4b63692e36d5e9a8b740210f1f5ea2e75af13a5fa62cab45fe0d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RouteCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouteCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RouteDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouteDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RouteEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouteEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RouteManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouteManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StopCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StopCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TripEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TripEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-608ca76285489e4b30fefe59795dbd96328533ff212d1fe57b4ab7a18bfcefe3b251e9feafad4b63692e36d5e9a8b740210f1f5ea2e75af13a5fa62cab45fe0d"' : 'data-target="#xs-injectables-links-module-AppModule-608ca76285489e4b30fefe59795dbd96328533ff212d1fe57b4ab7a18bfcefe3b251e9feafad4b63692e36d5e9a8b740210f1f5ea2e75af13a5fa62cab45fe0d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-608ca76285489e4b30fefe59795dbd96328533ff212d1fe57b4ab7a18bfcefe3b251e9feafad4b63692e36d5e9a8b740210f1f5ea2e75af13a5fa62cab45fe0d"' :
                                        'id="xs-injectables-links-module-AppModule-608ca76285489e4b30fefe59795dbd96328533ff212d1fe57b4ab7a18bfcefe3b251e9feafad4b63692e36d5e9a8b740210f1f5ea2e75af13a5fa62cab45fe0d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppServerModule-1fd0664dd4ee3b0767e5c86c9653ec535a2953ba80cd32449d9a3e60c6657073e4a60e9b077ebc3e28d0630fe0bfd63f219ef9b96c3e0cfc25b250373024ff28"' : 'data-target="#xs-components-links-module-AppServerModule-1fd0664dd4ee3b0767e5c86c9653ec535a2953ba80cd32449d9a3e60c6657073e4a60e9b077ebc3e28d0630fe0bfd63f219ef9b96c3e0cfc25b250373024ff28"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-1fd0664dd4ee3b0767e5c86c9653ec535a2953ba80cd32449d9a3e60c6657073e4a60e9b077ebc3e28d0630fe0bfd63f219ef9b96c3e0cfc25b250373024ff28"' :
                                            'id="xs-components-links-module-AppServerModule-1fd0664dd4ee3b0767e5c86c9653ec535a2953ba80cd32449d9a3e60c6657073e4a60e9b077ebc3e28d0630fe0bfd63f219ef9b96c3e0cfc25b250373024ff28"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TranslocoRootModule.html" data-type="entity-link" >TranslocoRootModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Agency.html" data-type="entity-link" >Agency</a>
                            </li>
                            <li class="link">
                                <a href="classes/Route.html" data-type="entity-link" >Route</a>
                            </li>
                            <li class="link">
                                <a href="classes/Statistics.html" data-type="entity-link" >Statistics</a>
                            </li>
                            <li class="link">
                                <a href="classes/Stop.html" data-type="entity-link" >Stop</a>
                            </li>
                            <li class="link">
                                <a href="classes/StopTime.html" data-type="entity-link" >StopTime</a>
                            </li>
                            <li class="link">
                                <a href="classes/Suspension.html" data-type="entity-link" >Suspension</a>
                            </li>
                            <li class="link">
                                <a href="classes/Trip.html" data-type="entity-link" >Trip</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AgencyService.html" data-type="entity-link" >AgencyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteService.html" data-type="entity-link" >RouteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsComponent.html" data-type="entity-link" >StatisticsComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsService.html" data-type="entity-link" >StatisticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StopService.html" data-type="entity-link" >StopService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StopTimeService.html" data-type="entity-link" >StopTimeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SuspensionService.html" data-type="entity-link" >SuspensionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslocoHttpLoader.html" data-type="entity-link" >TranslocoHttpLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TripService.html" data-type="entity-link" >TripService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthResponse.html" data-type="entity-link" >AuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/formStop.html" data-type="entity-link" >formStop</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/formStop-1.html" data-type="entity-link" >formStop</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MostUsedTransportResponse.html" data-type="entity-link" >MostUsedTransportResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserForAuthentication.html" data-type="entity-link" >UserForAuthentication</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});