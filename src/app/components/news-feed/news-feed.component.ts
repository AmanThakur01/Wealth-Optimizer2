import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent {
  constructor(private common:CommonService){  }
  topHeadlinesData: any;

  ngOnInit(): void {
    this.common.topHeadlines().subscribe((result:any) => {
      this.topHeadlinesData = result.articles;
      //  console.log(result);
    })
  }
}
