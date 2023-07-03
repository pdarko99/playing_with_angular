import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, combineLatest, map, of, startWith, switchMap, tap } from 'rxjs';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  providers:[MyServiceService],
  imports:[CommonModule, ReactiveFormsModule]
})
export class HomeComponent implements OnInit {
  teamControl = new FormControl<number | string>('');
  #searchService = inject(MyServiceService);

  teams$ = this.#searchService.getTeams().pipe(
    tap(x => console.log(x, 'from x')),
    map(x => x.response),
    catchError((error) => {
      console.log('Error getting Products', error)
      return of([])
    })
  )

  // teams$ = this.teamControl.valueChanges.pipe(
  //   withLatestFrom(
  //     this.#searchService.getTeams().pipe(
  //       tap(x => console.log(x, 'from x')),
  //       map(x => x.response),
  //       catchError((error) => {
  //         console.log('Error getting Products', error)
  //         return of([])
  //       })
  //     )
  //   ), map(([userInput, teams]) => {
  //    const filteredTeams = teams.filter((c: { team: { name: string; }; }) => c.team.name.toLowerCase().indexOf(userInput!.toLowerCase()) !== -1)
  //     return filteredTeams.length > 0 ? filteredTeams : teams;

  //   })


  // states$ = combineLatest([this.teamControl.valueChanges.pipe(
  //   startWith("")
  // ), this.teams$]).pipe(
  //   map(([userInput, teams]) => {
  //        const filteredTeams = teams.filter((c: { team: { name: string; }; }) => c.team.name.toLowerCase().indexOf(userInput!.toLowerCase()) !== -1)
  //         return filteredTeams.length > 0 ? filteredTeams : teams;
  //   }));
    

  lastfive$ = this.teamControl.valueChanges.pipe(
    tap(x => console.log(x)),
    switchMap(countryId => this.#searchService.getLastSix(countryId ? countryId : '').pipe(
      tap(x => console.log(x, "hemm weiafds")),
      map(x => x.response),
      tap(x => console.log(x, "hemm weiafds"))
    ))
  )



 //#region My Region

 // add a fromControl to a select tag
 // use switch map to get the last six results of any changes
 // use combineLatest with latest from 
 //mergemap to get the teams with their associated last six results

 
//#endregion


  ngOnInit() {

  }

}