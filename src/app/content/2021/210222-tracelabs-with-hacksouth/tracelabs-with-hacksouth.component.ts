import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-feb-tracelabs-with-hacksouth',
  templateUrl: './tracelabs-with-hacksouth.component.html',
  styleUrls: []
})
export class Feb2021TracelabsWithHacksouthComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/postx/2021/2021_02_26+TraceLabs-CTF-With-Hacksouth', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['tracelabs', 'hacksouth', 'ctf']);
  }
}
