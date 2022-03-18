import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-2020-bsides-islamabad',
  templateUrl: './bsides-islamabad.component.html',
  styleUrls: []
})
export class Nov2020BsidesIslamabadComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2020/2020_11_09+I-talked-at-BSides-Islamabad', this.post.title,
                      this.post.imageUrl, 1920, 1080,
                      ['cybersec', 'cybersecurity', 'infosec', 'bsides', 'conference', 'islamabad', 'pakistan', 'iot', 'international', 'online', 'talk']);
  }
}
