import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-revamping-my-bsc-project',
  templateUrl: './revamping-my-bsc-project.component.html'
})
export class Mar2023RevampingMyBscProjectComponent implements OnInit {
  post: Post;

  constructor(private meta: MetaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.post = (data as Post));
    this.meta.setTags(`/post/${this.post.path.slice(0, 4)}/${this.post.path}`, this.post.title,
                      this.post.imageUrl, 1280, 720,
                      ["Dominant Language Constellation", "Larissa Aronin", "Laurent Moccozet", "10.1017/CBO9781107425965.007", "10.1007/978-3-030-52336-7_1", "Docker", "NGINX", "Angular", "LoopBack", "d3-force-3d"],
                      this.post.description, this.post.readingTime);
  }
}
