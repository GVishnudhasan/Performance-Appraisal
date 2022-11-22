import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hodsnh',
  templateUrl: './hodsnh.component.html',
  styleUrls: ['./hodsnh.component.scss']
})
export class HodsnhComponent implements OnInit {

  //constructor() { }

  academic_Activities: FormGroup | any;
  researchDevelopment_Activities: FormGroup | any;
  firstDevelopment_Activities: FormGroup | any;
  StudentDevelopment_Activities: FormGroup | any;
  minmax: any;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  categoryList = {
    g1: {
      qty_of_class: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 20,
      },
      qb: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      rf_book: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },
    g2: {
      qty_of_videomaterial: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      prep_of_videomaterial: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },

    g3: {
      gate_or_refbook: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      usage_of_bt: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 5,
      },
      on_time_sub_qp: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 5,
      },
      grand_total: 0,
    },
    g4: {
      prep_of_ppt: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      using_various_ptm: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },
    g5: {
      mid_sem_fb: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 5,
      },
      end_sem_fb: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 5,
      },
      arm_fb: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },
    g6: {
      on_time_sub: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      comp_of_cf: {
        os1: 0,
        os2: 0,
        es1: 0,
        es2: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },
    g7: {
      pass: 0,
      score: 0,
      overall_total:80
    },
    g8: {
      pass: 0,
      score: 0,
      overall_total:80
    },
  };
  categoryList2 = {
    g1: {
      fdp_out: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      fdp_in: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      workshop_seminar: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g2: {
      ugc_care_journal: {
        marks: 0,
        sum: 0,
        overall_total: 50,
      },
      sci_ind_wos_journal:{
        marks:0,
        sum:0,
        overall_total:50
      },
      grand_total: 0,
    },

  
    g3: {
      national_intl_conference: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      book_publication: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      grand_total: 0,
    },
    g4: {
      proposal_submission: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      grand_total: 0,
    },
    g5: {
      less_than_one: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      one_five_lakh: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      
      more_than_five: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      grand_total: 0,
    },
    
      


  };
  categoryList3= {
    g1: {
      overall_firstyear_result: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      overall_dept_result:{
        marks: 0,
        sum: 0,
       overall_total:30,
      },
      grand_total:0,
    },
    g2:{
      fds_sttp: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      grand_total:0,
    },
    g3:{
      cert_courses: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      grand_total:0,
    },
    g4:{
      guest_lecture: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total:0,
    },
    g5:{
      funding_prop: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      grand_total:0,
    },
    g6:{
      conf_book_proposal: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      grand_total:0,
    },
    g7:{
      journal_publ: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      grand_total:0,
    },
    g8:{
      membership: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total:0,
    },
    g9: {
      grants_rec: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total:0,
    },
    g10: {
      awards: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
  };
  categoryList4= {
    g1: {
      membership: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      }
    },
    g2: {
      part_in_cocurr: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
    },
    g3: {
      val_added: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
    },
    g4: {
      part_in_extracurr: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
    },
    g5: {
      prizes: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
    },
    grand_total: 0,
  };


  ngOnInit(): void {

    const fb = this.fb;
    this.academic_Activities = fb.group({
      qty_of_class_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qty_of_class_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qty_of_class_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qty_of_class_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qb_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qb_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qb_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qb_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      rf_book_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      rf_book_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      rf_book_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      rf_book_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qty_of_videomaterial_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qty_of_videomaterial_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qty_of_videomaterial_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      qty_of_videomaterial_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prep_of_videomaterial_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prep_of_videomaterial_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prep_of_videomaterial_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prep_of_videomaterial_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      gate_or_refbook_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      gate_or_refbook_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      gate_or_refbook_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      gate_or_refbook_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      usage_of_bt_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      usage_of_bt_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      usage_of_bt_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      usage_of_bt_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_sub_qp_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_sub_qp_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_sub_qp_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_sub_qp_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prep_of_ppt_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prep_of_ppt_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prep_of_ppt_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prep_of_ppt_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      using_various_ptm_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      using_various_ptm_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      using_various_ptm_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      using_various_ptm_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      mid_sem_fb_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      mid_sem_fb_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      mid_sem_fb_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      mid_sem_fb_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      end_sem_fb_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      end_sem_fb_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      end_sem_fb_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      end_sem_fb_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      arm_fb_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      arm_fb_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      arm_fb_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      arm_fb_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_sub_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_sub_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_sub_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_sub_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      comp_of_cf_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      comp_of_cf_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      comp_of_cf_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      comp_of_cf_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      pass: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      pass_1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
    }),


    this.researchDevelopment_Activities = fb.group({
    
      fdp_out: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      fdp_in: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      workshop_seminar: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      ugc_care_journal: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      sci_ind_wos_journal: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      national_intl_conference: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      book_publication: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      proposal_submission: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      less_than_one: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      one_five_lakh: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      more_than_five: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
    }),


    this.firstDevelopment_Activities = fb.group({
      overall_firstyear_result: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      overall_dept_result: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      fds_sttp: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      cert_courses: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      guest_lecture: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      funding_prop: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      conf_book_proposal: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      journal_publ: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      membership: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      grants_rec: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      awards: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),

    }),

    
    this.StudentDevelopment_Activities= fb.group({
      membership1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      part_in_cocurr: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      val_added: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      part_in_extracurr: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prizes: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
    });
  }


  get f() { return this.academic_Activities.controls; }
  get f1() { return this.researchDevelopment_Activities.controls; }
  get f2() { return this.firstDevelopment_Activities.controls; }
  get f3() { return this.StudentDevelopment_Activities.controls; }
  async setmap() {
    await this.opt_data();
    console.log(this.categoryList);
  }

  async opt_data() {
    //cl - g1
    this.categoryList.g1.qty_of_class.sum =
      (this.categoryList.g1.qty_of_class.os1 +
        this.categoryList.g1.qty_of_class.os2 +
        this.categoryList.g1.qty_of_class.es1 +
        this.categoryList.g1.qty_of_class.es2) /
      4;

    this.categoryList.g1.qb.sum =
      (this.categoryList.g1.qb.os1 +
        this.categoryList.g1.qb.os2 +
        this.categoryList.g1.qb.es1 +
        this.categoryList.g1.qb.es2) /
      4;

    this.categoryList.g1.rf_book.sum =
      (this.categoryList.g1.rf_book.os1 +
        this.categoryList.g1.rf_book.os2 +
        this.categoryList.g1.rf_book.es1 +
        this.categoryList.g1.rf_book.es2) /
      4;

    this.categoryList.g1.grand_total =
      this.categoryList.g1.qty_of_class.sum +
      this.categoryList.g1.qb.sum +
      this.categoryList.g1.rf_book.sum;

    //cl - g2

    this.categoryList.g2.qty_of_videomaterial.sum =
      (this.categoryList.g2.qty_of_videomaterial.os1 +
        this.categoryList.g2.qty_of_videomaterial.os2 +
        this.categoryList.g2.qty_of_videomaterial.es1 +
        this.categoryList.g2.qty_of_videomaterial.es2) /
      4;

    this.categoryList.g2.prep_of_videomaterial.sum =
      (this.categoryList.g2.prep_of_videomaterial.os1 +
        this.categoryList.g2.prep_of_videomaterial.os2 +
        this.categoryList.g2.prep_of_videomaterial.es1 +
        this.categoryList.g2.prep_of_videomaterial.es2) /
      4;

    this.categoryList.g2.grand_total =
      this.categoryList.g2.qty_of_videomaterial.sum +
      this.categoryList.g2.prep_of_videomaterial.sum;

    //cl - g3
    this.categoryList.g3.gate_or_refbook.sum =
      (this.categoryList.g3.gate_or_refbook.os1 +
        this.categoryList.g3.gate_or_refbook.os2 +
        this.categoryList.g3.gate_or_refbook.es1 +
        this.categoryList.g3.gate_or_refbook.es2) /
      4;

    this.categoryList.g3.usage_of_bt.sum =
      (this.categoryList.g3.usage_of_bt.os1 +
        this.categoryList.g3.usage_of_bt.os2 +
        this.categoryList.g3.usage_of_bt.es1 +
        this.categoryList.g3.usage_of_bt.es2) /
      4;

    this.categoryList.g3.on_time_sub_qp.sum =
      (this.categoryList.g3.on_time_sub_qp.os1 +
        this.categoryList.g3.on_time_sub_qp.os2 +
        this.categoryList.g3.on_time_sub_qp.es1 +
        this.categoryList.g3.on_time_sub_qp.es2) /
      4;

    this.categoryList.g3.grand_total =
      this.categoryList.g3.usage_of_bt.sum +
      this.categoryList.g3.gate_or_refbook.sum +
      this.categoryList.g3.on_time_sub_qp.sum;

    //cl - g4

    this.categoryList.g4.prep_of_ppt.sum =
      (this.categoryList.g4.prep_of_ppt.os1 +
        this.categoryList.g4.prep_of_ppt.os2 +
        this.categoryList.g4.prep_of_ppt.es1 +
        this.categoryList.g4.prep_of_ppt.es2) /
      4;

    this.categoryList.g6.comp_of_cf.sum =
      (this.categoryList.g6.comp_of_cf.os1 +
        this.categoryList.g6.comp_of_cf.os2 +
        this.categoryList.g6.comp_of_cf.es1 +
        this.categoryList.g6.comp_of_cf.es2) /
      4;

    this.categoryList.g4.grand_total =
      this.categoryList.g4.prep_of_ppt.sum +
      this.categoryList.g6.comp_of_cf.sum;

    //cl - g5
    this.categoryList.g5.mid_sem_fb.sum =
      (this.categoryList.g5.mid_sem_fb.os1 +
        this.categoryList.g5.mid_sem_fb.os2 +
        this.categoryList.g5.mid_sem_fb.es1 +
        this.categoryList.g5.mid_sem_fb.es2) /
      4;

    this.categoryList.g5.end_sem_fb.sum =
      (this.categoryList.g5.end_sem_fb.os1 +
        this.categoryList.g5.end_sem_fb.os2 +
        this.categoryList.g5.end_sem_fb.es1 +
        this.categoryList.g5.end_sem_fb.es2) /
      4;

    this.categoryList.g5.arm_fb.sum =
      (this.categoryList.g5.arm_fb.os1 +
        this.categoryList.g5.arm_fb.os2 +
        this.categoryList.g5.arm_fb.es1 +
        this.categoryList.g5.arm_fb.es2) /
      4;

    this.categoryList.g5.grand_total =
      this.categoryList.g5.mid_sem_fb.sum +
      this.categoryList.g5.end_sem_fb.sum +
      this.categoryList.g5.arm_fb.sum;

    //cl - g6

    this.categoryList.g6.on_time_sub.sum =
      (this.categoryList.g6.on_time_sub.os1 +
        this.categoryList.g6.on_time_sub.os2 +
        this.categoryList.g6.on_time_sub.es1 +
        this.categoryList.g6.on_time_sub.es2) /
      4;

    this.categoryList.g6.comp_of_cf.sum =
      (this.categoryList.g6.comp_of_cf.os1 +
        this.categoryList.g6.comp_of_cf.os2 +
        this.categoryList.g6.comp_of_cf.es1 +
        this.categoryList.g6.comp_of_cf.es2) /
      4;

    this.categoryList.g6.grand_total =
      this.categoryList.g6.comp_of_cf.sum +
      this.categoryList.g6.on_time_sub.sum;

    //cl2 - g2

    this.categoryList2.g1.grand_total =
      this.categoryList2.g1.fdp_out.marks +
      this.categoryList2.g1.fdp_in.marks +
      this.categoryList2.g1.workshop_seminar.marks;

    //cl2 - g3

    this.categoryList2.g2.grand_total =
      this.categoryList2.g2.ugc_care_journal.marks;
      this.categoryList2.g2.sci_ind_wos_journal.marks;


    //cl2 - g4

    this.categoryList2.g3.grand_total =
      this.categoryList2.g3.national_intl_conference.marks +
      this.categoryList2.g3.book_publication.marks;

    //cl2 - g5

    this.categoryList2.g4.grand_total =
      this.categoryList2.g4.proposal_submission.marks;

    //cl2 - g6

    this.categoryList2.g5.grand_total =
      this.categoryList2.g5.less_than_one.marks +
      this.categoryList2.g5.one_five_lakh.marks +
      this.categoryList2.g5.more_than_five.marks;

    //cl2 - g7
    this.categoryList3.g1.grand_total =
      this.categoryList3.g1.overall_firstyear_result.marks +
      this.categoryList3.g1.overall_dept_result.marks ;

    this.categoryList3.g2.grand_total=this.categoryList3.g2.fds_sttp.marks;
    this.categoryList3.g3.grand_total=this.categoryList3.g3.cert_courses.marks;
    this.categoryList3.g4.grand_total=this.categoryList3.g4.guest_lecture.marks;
    this.categoryList3.g5.grand_total=this.categoryList3.g5.funding_prop.marks;
    this.categoryList3.g6.grand_total=this.categoryList3.g6.conf_book_proposal.marks;
    this.categoryList3.g7.grand_total=this.categoryList3.g7.journal_publ.marks;
    this.categoryList3.g8.grand_total=this.categoryList3.g8.membership.marks;
    this.categoryList3.g9.grand_total=this.categoryList3.g9.grants_rec.marks;
    this.categoryList3.g10.grand_total=this.categoryList3.g10.awards.marks;
  }

  active_flag = 0;
  max_list = 4;
  mActive(arg:any){
    if(arg){
      this.active_flag = (this.active_flag < this.max_list) ? this.active_flag + 1 : this.active_flag;
    }else{
      this.active_flag = (this.active_flag > 0) ? this.active_flag - 1 : this.active_flag;
    }
  }

  async mToastMsg(tag: boolean, title: any, message: any) {
    await this.toastr[ (tag) ? 'success' : 'error'](title, message, {
      timeOut: 3000,
    });
  }
}