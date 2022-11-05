import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories: any = null;

  constructor() {
  }

  ngOnInit() {
    this.stories = this.getStories();
  }


  getStories() {
    let stories: any = [{
      name: "sss",
      author: "me",
      text: "gfdg"
    },
      {
        name: "www",
        author: "him",
        text: "fdsf"
      }
    ]
    return stories
  }

}
