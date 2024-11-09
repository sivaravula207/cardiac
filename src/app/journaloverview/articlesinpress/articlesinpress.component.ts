import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articlesinpress',
  templateUrl: './articlesinpress.component.html',
  styleUrls: ['./articlesinpress.component.css']
})
export class ArticlesinpressComponent implements OnInit {

  articlesarray = [
    {
    'articleId': 1,
    'articleTitle': `A Case Series of Proliferative Deterioration in Adjacent Mitral
    Valve Tissue after Mitral Transcatheter Edge-to-Edge Repair
    in Patients with Degenerative Mitral Regurgitation`,
    'articleAbstract': `<p>There has been growing success in treating patients with functional mitral regurgitation (FMR) due to the
    expanding role of mitral transcatheter edge-to-edge repair (mTEER) systems. While similar success exists for
    mTEER in higher, or greater, surgical risk patient with degenerative MR (DMR), clinical and technical markers
    of success have not reached the levels seen in FMR patients. In this case series we will examine cases of DMR
    treated with the commercially available MitraClip system who later developed recurrence of 3+, or greater,
    mitral regurgitation (MR).</p>
    <p>We present three cases of recurrent DMR and postulate the continued proliferation of degeneration can
    be attributed to the flagpole effect. This effect derives its name from the deterioration found at weak points
    along a flag as it connects to the flagpole tethered on one side. The damage is caused by the chronic effects of
    adjacent pressure loading placed by excess forces at the weak points of the flag in its attachment to the fixed
    flagpole. In the transcatheter mitral space, we propose the Waggoner-Flagpole Effect (WFE) as an etiology for
    proliferation of degeneration in certain DMR patients post mTEER by tethering adjacent degenerative mitral
    segments with a fixation point causing excess loading pressure on neighboring diseased mitral tissue leading
    to premature and accelerated tissue breakdown.
    </p>
    <p><strong>Keywords:</strong> Mitral transcatheter edge-to-edge repair . MitraClip . Waggoner-Flagpole Effect . Degenerative
    mitral regurgitation . Mitral regurgitation.</p>`
  },
  {
    'articleId': 2,
    'articleTitle': 'Bailout Angiography-Guided Three-Dimensional Wiring for Intraprocedural Coronary Artery Occlusion: A Case Report',
    'articleAbstract': `<p>We present a case of bailout for an intraprocedural coronary artery occlusion using three-dimensional (3D)
    wiring, a technique that has been generally used for a chronic total occlusion (CTO).</p>
    <p>The target vessel initially had antegrade flow; however, it was completely occluded after a guidewire entered
    a dissection plane. Although the distal true lumen was visualized by collateral flow from the left circumflex
    artery, these collaterals did not appear interventional for the retrograde approach. We manipulated the
    Conquest Pro 12 guidewire according to 3D wiring theory on two orthogonal projections; the guidewire was
    then crossed into the distal true lumen without expanding the dissection plane. After the wire course was
    confirmed by intravascular ultrasonography, the target vessel was successfully stented with an excellent final
    angiographic result.</p>
    <p>When an iatrogenic coronary dissection caused by a guidewire occurs during percutaneous coronary
    intervention, a careless wiring might cause inadvertent expansion of a false lumen.</p>
    <p><strong>Keywords:</strong> Complications . Percutaneous coronary angioplasty . Coronary artery disease . Angina pectoris .
    Coronary vessel.</p>`
  }
]
  articleContent: any;
  constructor() { }

  ngOnInit() {
  }


  getArticleContent(e:any){
    var i = 0
    this.articleContent = {}
    for(i = 0; i < this.articlesarray.length; i++){
      if(this.articlesarray[i].articleId == e){
        this.articleContent = this.articlesarray[i]
      }
    }
  }
}
