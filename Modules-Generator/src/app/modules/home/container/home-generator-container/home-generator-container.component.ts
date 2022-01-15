import { Component } from '@angular/core';
import { Generate } from 'src/app/shared/models/generate.model';
import * as JSZip from 'jszip';
import fileSaver from 'file-saver';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-home-generator-container',
  templateUrl: './home-generator-container.component.html',
  styleUrls: ['./home-generator-container.component.scss'],
})
export class HomeGeneratorContainerComponent {
  constructor(private notificationService: NotificationService) {}

  generateModule(generate: Generate): void {
    let moduleLower = generate.module.toLowerCase();
    let moduleUpper =
      generate.module[0].toUpperCase() +
      generate.module.substr(1).toLowerCase();
    let componentLower = generate.component.toLowerCase();
    let componentUpper =
      generate.component[0].toUpperCase() +
      generate.component.substr(1).toLowerCase();
    const zip = new JSZip();
    zip
      .folder(moduleLower)
      .file(
        moduleLower + '.module.ts',
        "import { NgModule } from '@angular/core';import { SharedModule } from '../../shared/shared.module';import { " +
          moduleUpper +
          "RoutingModule } from './" +
          moduleLower +
          "-routing.module';import { " +
          moduleUpper +
          componentUpper +
          "ContainerComponent } from './container/" +
          moduleLower +
          '-' +
          componentLower +
          '-container/' +
          moduleLower +
          '-' +
          componentLower +
          "-container.component';import { " +
          moduleUpper +
          componentUpper +
          "PresenterComponent } from './presenter/" +
          moduleLower +
          '-' +
          componentLower +
          '-presenter/' +
          moduleLower +
          '-' +
          componentLower +
          "-presenter.component';@NgModule({declarations: [" +
          moduleUpper +
          componentUpper +
          'ContainerComponent,' +
          moduleUpper +
          '' +
          componentUpper +
          'PresenterComponent,],imports: [' +
          moduleUpper +
          'RoutingModule, SharedModule],})export class ' +
          moduleUpper +
          'Module {}\n'
      )
      .file(
        moduleLower + '-routing.module.ts',
        "import { RouterModule, Routes } from '@angular/router';import { NgModule } from '@angular/core';import { " +
          moduleUpper +
          componentUpper +
          "ContainerComponent } from './container/" +
          moduleLower +
          '-' +
          componentLower +
          '-container/' +
          moduleLower +
          '-' +
          componentLower +
          "-container.component';const routes: Routes = [{path: '',component: " +
          moduleUpper +
          componentUpper +
          'ContainerComponent,},];@NgModule({imports: [RouterModule.forChild(routes)],exports: [RouterModule],})export class ' +
          moduleUpper +
          'RoutingModule {}\n'
      )
      .folder('container')
      .folder(moduleLower + '-' + componentLower + '-container')
      .file(
        moduleLower + '-' + componentLower + '-container.component.html',
        '<app-' +
          moduleLower +
          '-' +
          componentLower +
          '-presenter></app-' +
          moduleLower +
          '-' +
          componentLower +
          '-presenter>'
      )
      .file(
        moduleLower + '-' + componentLower + '-container.component.scss',
        ':host {width: 100vw;height: 100vh;}'
      )
      .file(
        moduleLower + '-' + componentLower + '-container.component.ts',
        "import { Component, OnInit } from '@angular/core'; @Component({selector: 'app-" +
          moduleLower +
          '-' +
          componentLower +
          "-container',templateUrl: './" +
          moduleLower +
          '-' +
          componentLower +
          "-container.component.html',styleUrls: ['./" +
          moduleLower +
          '-' +
          componentLower +
          "-container.component.scss']})export class " +
          moduleUpper +
          componentUpper +
          'ContainerComponent implements OnInit {constructor() { }ngOnInit(): void {}}'
      );

    zip
      .folder(moduleLower)
      .folder('presenter')
      .folder(moduleLower + '-' + componentLower + '-presenter')
      .file(
        moduleLower + '-' + componentLower + '-presenter.component.html',
        '<div class="container"></div>'
      )
      .file(
        moduleLower + '-' + componentLower + '-presenter.component.scss',
        ':host {width: 100vw;height: 100vh;} .container{}'
      )
      .file(
        moduleLower + '-' + componentLower + '-presenter.component.ts',
        "import { Component, OnInit } from '@angular/core'; @Component({selector: 'app-" +
          moduleLower +
          '-' +
          componentLower +
          "-presenter',templateUrl: './" +
          moduleLower +
          '-' +
          componentLower +
          "-presenter.component.html',styleUrls: ['./" +
          moduleLower +
          '-' +
          componentLower +
          "-presenter.component.scss']})export class " +
          moduleUpper +
          componentUpper +
          'PresenterComponent implements OnInit {ngOnInit(): void {}}'
      );
    if (generate.check) {
      let modelLower = generate.model?.toLowerCase();
      let modelUpper =
        generate.model[0].toUpperCase() +
        generate.model.substr(1).toLowerCase();
      zip
        .folder(moduleLower)
        .folder('services')
        .file(
          moduleLower + '.service.ts',
          "import { HttpClient, HttpParams } from '@angular/common/http';import { Injectable } from '@angular/core';import { Observable } from 'rxjs';import { exhaustMap, map, take } from 'rxjs/operators';import { Auth } from '../../../shared/models/auth.model';import { AuthFacade } from '../../auth/store/auth.facade';import { " +
            modelUpper +
            " } from '../../../shared/models/" +
            modelLower +
            ".model';@Injectable({providedIn: 'root',})export class " +
            moduleUpper +
            'Service {private readonly endpoints = {' +
            modelLower +
            "s:'https://ng-complete-course-by-me-default-rtdb.firebaseio.com/" +
            modelLower +
            ".json',};constructor(private http: HttpClient, private authFacade: AuthFacade) {}load" +
            modelUpper +
            's(): Observable<' +
            modelUpper +
            '[]> {return this.authFacade.auth$.pipe(take(1),exhaustMap((auth: Auth) => {return this.http.get<' +
            modelUpper +
            '[]>(this.endpoints.' +
            modelLower +
            "s, {params: new HttpParams().set('auth', auth?.idToken),}).pipe(map((" +
            modelLower +
            's) => {return ' +
            modelLower +
            's.map((' +
            modelLower +
            's, index) => {return { ...' +
            modelLower +
            's, id: index++ };});}));}));}save' +
            modelUpper +
            's(' +
            modelLower +
            's: ' +
            modelUpper +
            '[]): Observable<' +
            modelUpper +
            '[]> {return this.authFacade.auth$.pipe(take(1),exhaustMap((auth: Auth) => {return this.http.put<' +
            modelUpper +
            '[]>(this.endpoints.' +
            modelLower +
            's, ' +
            modelLower +
            "s, {params: new HttpParams().set('auth', auth?.idToken),});}));}}"
        );

      zip
        .folder(moduleLower)
        .folder('store')
        .file(
          moduleLower + '.facade.ts',
          "import { Injectable } from '@angular/core';import { select, Store } from '@ngrx/store';import { Observable } from 'rxjs';import { " +
            modelUpper +
            " } from '../../../shared/models/" +
            modelLower +
            ".model';import * as fromApp from '../../../store/app.interface';import * as from" +
            moduleUpper +
            " from './" +
            moduleLower +
            '-state/' +
            moduleLower +
            ".reducer';import * as " +
            moduleLower +
            "Actions from './" +
            moduleLower +
            '-state/' +
            moduleLower +
            ".actions';@Injectable({ providedIn: 'root' })export class " +
            moduleUpper +
            'Facade {' +
            modelLower +
            's$: Observable<' +
            modelUpper +
            '[]> = this.store.pipe(select(from' +
            moduleUpper +
            '.selectAll));constructor(private store: Store<fromApp.AppState>) {}save' +
            modelUpper +
            's(' +
            modelLower +
            's: ' +
            modelUpper +
            '): void {this.store.dispatch(' +
            moduleLower +
            'Actions.save' +
            modelUpper +
            's({ ' +
            modelLower +
            's }));}load' +
            modelUpper +
            's(): void {this.store.dispatch(' +
            moduleLower +
            'Actions.load' +
            modelUpper +
            's());}add' +
            modelUpper +
            '(' +
            modelLower +
            ': ' +
            modelUpper +
            '): void {this.store.dispatch(' +
            moduleLower +
            'Actions.add' +
            modelUpper +
            '({' +
            modelLower +
            '}));}upsert' +
            modelUpper +
            '(' +
            modelLower +
            ': ' +
            modelUpper +
            '): void {this.store.dispatch(' +
            moduleLower +
            'Actions.upsert' +
            modelUpper +
            '({' +
            modelLower +
            '}));}update' +
            modelUpper +
            '(' +
            modelLower +
            ': Update<' +
            modelUpper +
            '>): void {this.store.dispatch(' +
            moduleLower +
            'Actions.update' +
            modelUpper +
            '({' +
            modelLower +
            '}));}delete' +
            modelUpper +
            '(' +
            modelLower +
            ': ' +
            modelUpper +
            '): void {this.store.dispatch(' +
            moduleLower +
            'Actions.delete' +
            modelUpper +
            '({' +
            modelLower +
            '}));}}'
        )
        .file(
          moduleLower + '.index.ts',
          "//import { createSelector } from '@ngrx/store'; import * as from" +
            moduleUpper +
            " from './" +
            moduleLower +
            '-state/' +
            moduleLower +
            ".reducer';import { get" +
            moduleUpper +
            "State } from './" +
            moduleLower +
            '-state/' +
            moduleLower +
            ".reducer'; export const get = createSelector(get" +
            moduleUpper +
            'State,   (state: from' +
            moduleUpper +
            '.' +
            moduleLower +
            'State) => state.example );'
        )
        .folder(moduleLower + '-state')
        .file(
          moduleLower + '.actions.ts',
          "import { createAction, props } from '@ngrx/store';import { " +
            modelUpper +
            " } from 'projects/fitatu/src/app/shared/models/" +
            modelLower +
            ".model';import { Update } from '@ngrx/entity';export const load" +
            modelUpper +
            "s = createAction('[" +
            moduleUpper +
            '] Load ' +
            modelUpper +
            "s');export const load" +
            modelUpper +
            "sSuccess = createAction('[" +
            moduleUpper +
            '] Load ' +
            modelUpper +
            "s Success',props<{ " +
            modelLower +
            's: ' +
            modelUpper +
            '[] }>());export const load' +
            modelUpper +
            "sFail = createAction('[" +
            moduleUpper +
            '] Load ' +
            modelUpper +
            "s Fail',props<{ error: string }>());export const save" +
            modelUpper +
            "s = createAction('[" +
            moduleUpper +
            '] Save ' +
            modelUpper +
            "s',props<{ " +
            modelLower +
            's: ' +
            modelUpper +
            '[] }>());export const save' +
            modelUpper +
            "sSuccess = createAction('[" +
            moduleUpper +
            '] Save ' +
            modelUpper +
            "s Success',props<{ " +
            modelLower +
            's: ' +
            modelUpper +
            '[] }>());export const save' +
            modelUpper +
            "sFail = createAction('[" +
            moduleUpper +
            '] Save ' +
            modelUpper +
            "s Fail',props<{ error: string }>());export const add" +
            modelUpper +
            " = createAction('[" +
            moduleUpper +
            '] Add ' +
            modelUpper +
            "',props<{ " +
            modelLower +
            ': ' +
            modelUpper +
            ' }>());export const delete' +
            modelUpper +
            " = createAction('[" +
            moduleUpper +
            '] Delete ' +
            modelUpper +
            "',props<{ id: string }>());export const update" +
            modelUpper +
            " = createAction('[" +
            moduleUpper +
            '] Update ' +
            modelUpper +
            "',props<{ " +
            modelLower +
            ': Update<' +
            modelUpper +
            '> }>());export const upsert' +
            modelUpper +
            " = createAction('[" +
            moduleUpper +
            '] Upsert ' +
            modelUpper +
            "',props<{ " +
            modelLower +
            ': ' +
            modelUpper +
            ' }>());'
        )
        .file(
          moduleLower + '.effects.ts',
          "import { Injectable } from '@angular/core';import { Actions, createEffect, ofType } from '@ngrx/effects';import { " +
            modelUpper +
            " } from 'projects/fitatu/src/app/shared/models/" +
            modelLower +
            ".model';import { of } from 'rxjs';import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';import { " +
            moduleUpper +
            "Service } from '../../services/" +
            moduleLower +
            ".service';import * as " +
            moduleLower +
            "Actions from './" +
            moduleLower +
            ".actions';@Injectable()export class " +
            moduleUpper +
            'Effects {constructor(private actions$: Actions,private ' +
            moduleLower +
            'Service: ' +
            moduleUpper +
            'Service) {}load' +
            modelUpper +
            's$ = createEffect(() =>this.actions$.pipe(ofType(' +
            moduleLower +
            'Actions.load' +
            modelUpper +
            's),exhaustMap(() =>this.' +
            moduleLower +
            'Service.load' +
            modelUpper +
            's().pipe(map((' +
            modelLower +
            's: ' +
            modelUpper +
            '[]) =>' +
            moduleLower +
            'Actions.load' +
            modelUpper +
            'sSuccess({' +
            modelLower +
            's,})),catchError((error) =>of(' +
            moduleLower +
            'Actions.load' +
            modelUpper +
            'sFail({ error: error.error })))))));save' +
            modelUpper +
            's$ = createEffect(() =>this.actions$.pipe(ofType(' +
            moduleLower +
            'Actions.save' +
            modelUpper +
            's),switchMap((action) =>this.' +
            moduleLower +
            'Service.save' +
            modelUpper +
            's(action.' +
            modelLower +
            's).pipe(map(() =>' +
            moduleLower +
            'Actions.save' +
            modelUpper +
            'sSuccess({ ' +
            modelLower +
            's: action.' +
            modelLower +
            's })),catchError((error) =>of(' +
            moduleLower +
            'Actions.save' +
            modelUpper +
            'sFail({ error: error.error })))))));}'
        )
        .file(
          moduleLower + '.reducer.ts',
          "import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';import { createFeatureSelector, createReducer, on } from '@ngrx/store';import { " +
            modelUpper +
            " } from 'projects/fitatu/src/app/shared/models/" +
            modelLower +
            ".model';import * as " +
            moduleLower +
            "Actions from './" +
            moduleLower +
            ".actions';export interface " +
            moduleLower +
            'State extends EntityState<' +
            modelUpper +
            '> {error: string;}export const ' +
            moduleLower +
            'Adapter: EntityAdapter<' +
            modelUpper +
            '> =createEntityAdapter<' +
            modelUpper +
            '>();export const ' +
            moduleLower +
            'InitialState = ' +
            moduleLower +
            'Adapter.getInitialState({error: null,});export const get' +
            moduleUpper +
            'State = createFeatureSelector<' +
            moduleLower +
            'State>("' +
            moduleLower +
            '");export const ' +
            moduleLower +
            'Reducer = createReducer(' +
            moduleLower +
            'InitialState,on(' +
            moduleLower +
            'Actions.load' +
            modelUpper +
            'sSuccess,' +
            moduleLower +
            'Actions.save' +
            modelUpper +
            'sSuccess,(state, action) => {return ' +
            moduleLower +
            'Adapter.upsertMany(action.' +
            modelLower +
            's, state);}),on(' +
            moduleLower +
            'Actions.load' +
            modelUpper +
            'sFail,' +
            moduleLower +
            'Actions.save' +
            modelUpper +
            'sFail,(state, action) => {return { ...state, error: action.error };}),on(' +
            moduleLower +
            'Actions.add' +
            modelUpper +
            ',(state, action) => {return ' +
            moduleLower +
            'Adapter.addOne(action.' +
            modelLower +
            ', state);}),on(' +
            moduleLower +
            'Actions.upsert' +
            modelUpper +
            ',(state, action) => {return ' +
            moduleLower +
            'Adapter.upsertOne(action.' +
            modelLower +
            ', state);}),on(' +
            moduleLower +
            'Actions.update' +
            modelUpper +
            ',(state, action) => {return ' +
            moduleLower +
            'Adapter.updateOne(action.' +
            modelLower +
            ', state);}),on(' +
            moduleLower +
            'Actions.delete' +
            modelUpper +
            ',(state, action) => {return ' +
            moduleLower +
            'Adapter.removeOne(action.id, state);}),);export const { selectIds, selectEntities, selectAll, selectTotal } =' +
            moduleLower +
            'Adapter.getSelectors(get' +
            moduleUpper +
            'State);'
        );
    }
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      fileSaver.saveAs(content, '' + moduleLower + '.zip');
    });
    if (generate.check) {
      this.notificationService.showSuccess(
        'Zadeklaruj NGRX do głównego STORE jak i EFFECT do app.module.ts!',
        'Nie zapomnij!'
      );
    }
    this.notificationService.showSuccess(
      'Dodaj ROUTING do app-routing-module.ts!',
      'Nie zapomnij!'
    );
  }
}
