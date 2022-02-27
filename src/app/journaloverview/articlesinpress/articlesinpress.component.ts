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
    'articleTitle': 'Alternative Support Strategy for High-Risk, Elective Percutaneous Coronary Intervention: Venoarterial Extracorporeal Membrane Oxygenation in Advanced Pulmonary Hypertension and Right Ventricular Dysfunction',
    'articleAbstract': `<p><strong>Objectives:</strong> We report our initial experience utilizing venoarterial extracorporeal membrane oxygenation
    (VA-ECMO) in a patient undergoing high-risk percutaneous coronary intervention (HR-PCI) and review the
    literature for outcomes data with prophylactic use of VA-ECMO in this setting.
    </p>
    <p><strong>Background:</strong> VA-ECMO is most commonly used in patients in cardiogenic shock and status-post cardiac
    arrest. Data on use of VA-ECMO for elective, HR-PCI is limited.</p>
    <p><strong>Case description:</strong> A 77-year-old frail Caucasian male with a complex medical history to include COPD with
    baseline supplementary oxygen use, pulmonary hypertension, type 2 diabetes mellitus, and hypertension
    underwent treadmill stress testing due to worsening dyspnea on exertion. After 2 minutes, he developed
    profound hypotension along with diffuse ST depressions on ECG.</p>
    <p><strong>Results:</strong> Following admission for urgent invasive coronary angiography, the patient was found to have severe
    multivessel obstructive coronary artery disease. After a multidisciplinary discussion, he was not deemed
    to be a surgical candidate. Due to recurrent admissions for acute decompensated heart failure and non-STelevation myocardial infarction (NSTEMI) complicated by syncope and pulmonary hypertension, the patient
    ultimately underwent successful VA-ECMO supported HR-PCI of the proximal LAD and proximal-to-mid RCA
    using rotational atherectomy.</p>
    <p><strong>Conclusions:</strong> This case highlights the effectiveness of VA-ECMO supported HR-PCI for patients with both
    RV dysfunction and high-risk coronary anatomy requiring multi-vessel PCI with rotational atherectomy. VAECMO can be successfully used prophylactically for hemodynamic support during elective, HR-PCI. Further
    investigation should focus on identifying the optimal support strategy for these high-risk cases with regards
    to outcome, revascularization, and patient comfort.</p>
    <p><strong>Keywords:</strong> Venoarterial, Extracorporeal membrane oxygenation, High-risk PCI</p>`
  },
  {
    'articleId': 2,
    'articleTitle': 'Failure of Computed Tomography Angiography to Detect a Large Fistula Connecting the Left Anterior Descending Artery to the Left Ventricle Circumflex Artery',
    'articleAbstract': `<p>Coronary artery fistula (CAF) is a rare anomaly with an estimated prevalence of 0.002%. More specifically,
    fistulas arising from the left anterior descending artery (LAD) constitute only 30%, and those draining into
    the left circulation account for a mere 10%. It is important to detect and treat CAFs because they can cause
    many serious complications. Coronary angiography has long been thought of as the reference standard for
    imaging; however, it has become less widely used because it is relatively invasive, involves a risk of procedurerelated complications, and yields 2D images that often provide limited delineation of the complex anatomy of
    abnormal communications. Computed tomography angiography (CTA) is a relatively new imaging tool that
    yields higher spatiotemporal resolution and more precisely demonstrates the sites, origins, and termination
    of abnormal blood vessels in 3D. Moreover, it is less invasive and involves a shorter acquisition time. Here,
    we demonstrate a case of a 41-year-old male with no significant past medical, surgical, or family history
    that presented as an outpatient with atypical chest pain and had a positive nuclear stress test. The patient
    subsequently underwent left heart catheterization, which revealed a fistula between the LAD and LV circumflex
    artery; however, CTA failed to show any evidence of a fistula.</p>
    <p><strong>Keywords:</strong> Coronary artery fistula, Computed tomography angiography</p>`
  },
  {
    'articleId': 3,
    'articleTitle': 'A Particular Case of MINOCA',
    'articleAbstract': `<p>Myocardial infarction with non-obstructive coronary arteries (MINOCA) is a clinical entity characterized
    by signs of myocardial infarction with normal or near-normal coronary arteries on angiography. The
    management of this condition is strongly dependent on the underlying pathophysiological mechanism.
    We report the case of a 63-year-old man who presented with posterior ST-segment elevation myocardial
    infarction (STEMI) with non-obstructed coronaries as an atypical presentation of a giant pheochromocytoma.
    The latter is a rare endocrine neoplasia, resulting in several cardiovascular manifestations, including type-2
    myocardial infarction and transient cardiomyopathy. Although the Scientific Statement from the American
    Heart Association and the European Society of Cardiology guidelines do not report pheochromocytoma as
    a potential cause of MINOCA, our case reiterates the importance of considering this diagnosis, especially in
    patients with concomitant transient cardiomyopathy and hypertensive crisis. A correct and prompt diagnosis
    in this context may avoid life-threatening complications.</p>
    <p><strong>Keywords:</strong> MINOCA, Pheochromocytoma, STEMI</p>`
  },
  {
    'articleId': 4,
    'articleTitle': 'A Case Report of Recurrent Acute Myocardial Infarction with a Peculiar Background',
    'articleAbstract': `<p>Occlusion of the right coronary artery is a relative rare complication of type-A aortic dissection and an example 
    of type-2 myocardial infarction as well, but when it occurs, it can be fatal. Misdiagnosis leads to inappropriate 
    therapy and delays. Our case made no exception. Etiology remains unclear although the patient’s background 
    might be related to his later, life-threatening complication.</p>
    <p><strong>Keywords:</strong>  Aortic dissection . Acute myocardial infarction . Pseudo aneurysm . Vasculitis . Hairy cell leukemia . 
    Cardiogenic shock</p>`
  },
  {
    'articleId': 5,
    'articleTitle': 'Balloon Angioplasty with Stent Implantation in Superior Vena Cava Stenosis in Pediatric Patients',
    'articleAbstract': `<p><strong>Introduction and Objective:</strong> Superior vena cava (SVC) obstruction can be a complication after congenital 
    heart disease surgery. In the current review we examined our experience and practice in stent implantation 
    after balloon angioplasty in superior vena cava (SVC) obstruction. The objective was to evaluate safety and 
    effectiveness results in patients with SVC stenosis treated by balloon angioplasty with stent implantation.</p>
    
    <p><strong>Methods:</strong> Our patient cohort included 11 pediatric patients followed at our institution after surgery 
    for congenital heart disease (CHD) correction, who developed SVC stenosis as a complication of CHD 
    surgery, and 1 patient with severe renal failure and dialysis catheter-related SVC obstruction, all of them 
    requiring endovascular SVC stent placement after balloon angioplasty. Our data acquisition was performed 
    retrospectively and it comprised age, gender, heart diagnosis, cardiovascular surgeries received, age at 
    surgery, weight at surgery, echocardiographic data during follow-up, date of SVC stent placement, weight at 
    intervention, symptoms presented at the time of the endovascular intervention, and clinical follow up data. 
    Final result was evaluated by assessing the re-establishment of normal flow in SVC, the disappearance of 
    collateral venous circulation, and the presence of normal pressure in systemic superior venous system. </p>
    
    <p><strong>Results:</strong> In a period comprised between January 2011 and June 2019, 11 patients required SVC endovascular 
    stent placement in our center. Gender distribution was 5 males and 6 females, and median age was 6,5 years 
    (6-11). Average weight at stent placement was 24 kg. Amongst our patients we had 6 sinus venous type atrial 
    septal defect with partial anomalous pulmonary venous return, 2 total anomalous pulmonary venous return, 
    2 Transposition of great arteries with Mustard correction, and 1 patient with SVC obstruction secondary to 
    chronic dialysis catheter placement. All stents were placed in biventricular circulation hearts. At the time of 
    stent placement, only 2 out of 8 patients had clear SVC syndrome related symptoms. Median time from surgery 
    to SVC stenting was 26 months (10-72 months) with longer times related to Mustard surgeries. Average mean 
    pressure gradient in SVC territory was 8 mmHg (12-3 mmHg) before stenting, and no gradient was found after 
    stenting. Only 1 patient required re-dilation due to neointimal proliferation, more than 7 years after stent 
    implantation, which was a small cell one. At the time of data acquisition, no other patients had required redilatation or re-stenting of SVC. Minimum and maximum follow-up time after endovascular intervention was 
    4 months and 6 years (mean follow up of 18.5 months), respectively. The overall outcome of the intervention 
    was good in all the cases, with re-establishment of normal circulation and pressure balance throughout the 
    superior venous territory. There were no major complications. </p>
    
    <p><strong>Conclusion:</strong> SVC obstruction is a non-frequent but important complication of CHD surgery and catheter 
    placement. Balloon angioplasty with stent implantation performed by an experienced team is a safe, effective 
    method to improve patients’ situation and reestablish normal venous return.</p>
    <p><strong>Keywords:</strong> Balloon Angioplasty . Stent Implantation . SVC Stenosis
    </p>`
  },
  {
    'articleId': 6,
    'articleTitle': 'Computational Fluid Dynamics Assessment of Omega Phenomenon; a Systolic Kinking of the Coronary Arteries in a Patient Presenting with Ischemia in the Absence of Coronary Artery Obstruction',
    'articleAbstract': `<p>Omega phenomenon is an angiographic observation, conceptualized and defined as systolic, exaggerate 
    excursion of epicardial artery segment resulting in aberrant looping/kinking (producing inlet and outlet 
    eccentric angulation) with transient partial luminal obliteration. This entity may be part of the causes of 
    myocardial ischemia in non-obstructive coronary arteries, and it is so called due to its resemblance of the last 
    Greek alphabet.</p>`
  },
  {
    'articleId': 7,
    'articleTitle': 'Novel Treatment of Iatrogenic Annular Rupture and Cardiac Tamponade during TAVR',
    'articleAbstract': `<p>In this case presentation, we discuss a novel therapy to treat cardiac tamponade caused by annular rupture
    during a transcatheter aortic valve replacement (TAVR) procedure. The patient underwent successful
    percutaneous implantation of an Edwards 29-mm Sapien 3 Ultra valve after which a substantial drop in blood
    pressure was noted. Intraprocedural post-implant aortic angiogram showed an iatrogenic annular rupture
    (IAR) outside the non-coronary cusp with transthoracic echocardiography confirmation of an expanding
    pericardial effusion. Immediate pericardiocentesis was performed, however, extraction of sanguineous
    product and hemodynamic instability continued. At this time, injectable gelatin thrombin hemostatic matrix
    was delivered to the annular rupture site at the non-coronary cusp side of the left ventricular outflow tract.
    Shortly after, there was stabilization of the pericardial effusion with improvement in hemodynamics. The
    patient was discharged home safely on hospital day four and continued to do well in follow up appointments.</p>`
  },
  {
    'articleId': 8,
    'articleTitle': 'Massive Functional Tricuspid Regurgitation with Right Heart Failure Percutaneously Treated with Triclip System and ECMO Assistance. Two Case Reports',
    'articleAbstract': `<p>In this report, we present the cases of two elderly patients with massive tricuspid regurgitation (TR) and
    severe right ventricular (RV) dysfunction causing right heart failure treated with percutaneous TriClip system
    assisted with veno-arterial extracorporeal membrane oxygenation (VA-ECMO).</p>`
  },
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
    console.log(this.articleContent)
  }
}
