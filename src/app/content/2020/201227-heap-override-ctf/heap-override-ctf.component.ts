
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../../services/meta.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-heap-override-ctf',
  templateUrl: './heap-override-ctf.component.html',
  styleUrls: []
})
export class Dec2020HeapOverrideCTFComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags('/post/2020/2020_12_27%2BHeap-Override-CTF-Challenge-JS-Reversal-Adventures', this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ['ctf', 'javascript', 'challenge', 'reversal']);
  }
}
