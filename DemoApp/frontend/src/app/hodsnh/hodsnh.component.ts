import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'; 
import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable";
import { deflateSync } from "zlib";
import { DeclareFunctionStmt } from "@angular/compiler";


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
      qb_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      qb_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      qb_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      qb_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      rf_book_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      rf_book_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      rf_book_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      rf_book_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      qty_of_videomaterial_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      qty_of_videomaterial_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      qty_of_videomaterial_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      qty_of_videomaterial_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      prep_of_videomaterial_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      prep_of_videomaterial_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      prep_of_videomaterial_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      prep_of_videomaterial_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      gate_or_refbook_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      gate_or_refbook_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      gate_or_refbook_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      gate_or_refbook_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      usage_of_bt_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      usage_of_bt_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      usage_of_bt_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      usage_of_bt_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      on_time_sub_qp_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      on_time_sub_qp_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      on_time_sub_qp_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      on_time_sub_qp_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      prep_of_ppt_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      prep_of_ppt_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      prep_of_ppt_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      prep_of_ppt_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      using_various_ptm_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      using_various_ptm_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      using_various_ptm_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      using_various_ptm_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      mid_sem_fb_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      mid_sem_fb_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      mid_sem_fb_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      mid_sem_fb_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      end_sem_fb_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      end_sem_fb_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      end_sem_fb_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      end_sem_fb_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(5)]),
      arm_fb_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      arm_fb_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      arm_fb_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      arm_fb_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      on_time_sub_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      on_time_sub_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      on_time_sub_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      on_time_sub_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      comp_of_cf_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      comp_of_cf_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      comp_of_cf_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      comp_of_cf_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
      pass: fb.control('', [Validators.required, Validators.min(0), Validators.max(80)]),
      pass_1: fb.control('', [Validators.required, Validators.min(0), Validators.max(80)]),
    }),


    this.researchDevelopment_Activities = fb.group({
    
      fdp_out: fb.control('', [Validators.required, Validators.min(0), Validators.max(40)]),
      fdp_in: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      workshop_seminar: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      ugc_care_journal: fb.control('', [Validators.required, Validators.min(0), Validators.max(50)]),
      sci_ind_wos_journal: fb.control('', [Validators.required, Validators.min(0), Validators.max(50)]),
      national_intl_conference: fb.control('', [Validators.required, Validators.min(0), Validators.max(40)]),
      book_publication: fb.control('', [Validators.required, Validators.min(0), Validators.max(40)]),
      proposal_submission: fb.control('', [Validators.required, Validators.min(0), Validators.max(30)]),
      less_than_one: fb.control('', [Validators.required, Validators.min(0), Validators.max(40)]),
      one_five_lakh: fb.control('', [Validators.required, Validators.min(0), Validators.max(40)]),
      more_than_five: fb.control('', [Validators.required, Validators.min(0), Validators.max(40)]),
    }),


    this.firstDevelopment_Activities = fb.group({
      overall_firstyear_result: fb.control('', [Validators.required, Validators.min(0), Validators.max(30)]),
      overall_dept_result: fb.control('', [Validators.required, Validators.min(0), Validators.max(30)]),
      fds_sttp: fb.control('', [Validators.required, Validators.min(0), Validators.max(30)]),
      cert_courses: fb.control('', [Validators.required, Validators.min(0), Validators.max(30)]),
      guest_lecture: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      funding_prop: fb.control('', [Validators.required, Validators.min(0), Validators.max(30)]),
      conf_book_proposal: fb.control('', [Validators.required, Validators.min(0), Validators.max(40)]),
      journal_publ: fb.control('', [Validators.required, Validators.min(0), Validators.max(30)]),
      membership: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      grants_rec: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      awards: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),

    }),

    
    this.StudentDevelopment_Activities= fb.group({
      membership1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      part_in_cocurr: fb.control('', [Validators.required, Validators.min(0), Validators.max(30)]),
      val_added: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      part_in_extracurr: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      prizes: fb.control('', [Validators.required, Validators.min(0), Validators.max(10)]),
    });
  }


  get f() { return this.academic_Activities.controls; }
  get f1() { return this.researchDevelopment_Activities.controls; }
  get f2() { return this.firstDevelopment_Activities.controls; }
  get f3() { return this.StudentDevelopment_Activities.controls; }


  async setmap() {
    await this.opt_data();
    if (this.active_flag == 0){
      console.log(this.categoryList);
    }
    if (this.active_flag == 1){
      console.log(this.categoryList2);
    }
    if (this.active_flag == 2){
      console.log(this.categoryList3);
    }
    if (this.active_flag == 3){
      console.log(this.categoryList4);
    }
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


   // Generate PDF
   async mGeneratePDF() {
    const doc = new jsPDF();
    doc.text('Academic activities - 300', 10, 10);
    autoTable(doc, {
      head: [['Parameter', 'Total - 400', 'Marks obtained in ODD-S1', 'Marks obtained in ODD-S2', 'Marks obtained in EVEN-S1', 'Marks obtained in EVEN-S2']],
      body: [
        ['Standard of Class notes - 40'],
        ['Quality of class notes', this.categoryList.g1.qty_of_class.overall_total, this.categoryList.g1.qty_of_class.os1, this.categoryList.g1.qty_of_class.os2, this.categoryList.g1.qty_of_class.es1, this.categoryList.g1.qty_of_class.es2],
        ['Question bank (Univ., 2 marks & 16 marks)', this.categoryList.g1.qb.overall_total, this.categoryList.g1.qb.os1, this.categoryList.g1.qb.os2, this.categoryList.g1.qb.es1, this.categoryList.g1.qb.es2],
        ['Ref. Book / Univ. QP Problem solving', this.categoryList.g1.rf_book.overall_total, this.categoryList.g1.rf_book.os1, this.categoryList.g1.rf_book.os2, this.categoryList.g1.rf_book.es1, this.categoryList.g1.rf_book.es2],
        ['Preparation of video material - 20'],
        ['Quality of video material', this.categoryList.g2.qty_of_videomaterial.overall_total, this.categoryList.g2.qty_of_videomaterial.os1, this.categoryList.g2.qty_of_videomaterial.os2, this.categoryList.g2.qty_of_videomaterial.es1, this.categoryList.g2.qty_of_videomaterial.es2],
        ['Preparation of video material', this.categoryList.g2.prep_of_videomaterial.overall_total, this.categoryList.g2.prep_of_videomaterial.os1, this.categoryList.g2.prep_of_videomaterial.os2, this.categoryList.g2.prep_of_videomaterial.es1, this.categoryList.g2.prep_of_videomaterial.es2],
        ['Standard of IA / Assignment / Tutorial QP - 20'],
        ['GATE / Ref. Book Questions', this.categoryList.g3.gate_or_refbook.overall_total, this.categoryList.g3.gate_or_refbook.os1, this.categoryList.g3.gate_or_refbook.os2, this.categoryList.g3.gate_or_refbook.es1, this.categoryList.g3.gate_or_refbook.es2],
        ['Usage of Blooms Taxonomy', this.categoryList.g3.usage_of_bt.overall_total, this.categoryList.g3.usage_of_bt.os1, this.categoryList.g3.usage_of_bt.os2, this.categoryList.g3.usage_of_bt.es1, this.categoryList.g3.usage_of_bt.es2],
        ['On time submission of Question Papers', this.categoryList.g3.on_time_sub_qp.overall_total, this.categoryList.g3.on_time_sub_qp.os1, this.categoryList.g3.on_time_sub_qp.os2, this.categoryList.g3.on_time_sub_qp.es1, this.categoryList.g3.on_time_sub_qp.es2],
        ['Innovation in Teaching & Learning - 20'],
        ['Preparation of PPT	', this.categoryList.g4.prep_of_ppt.overall_total, this.categoryList.g4.prep_of_ppt.os1, this.categoryList.g4.prep_of_ppt.os2, this.categoryList.g4.prep_of_ppt.es1, this.categoryList.g4.prep_of_ppt.es2],
        ['Using various Pedagogical teaching methods', this.categoryList.g4.using_various_ptm.overall_total, this.categoryList.g4.using_various_ptm.os1, this.categoryList.g4.using_various_ptm.os2, this.categoryList.g4.using_various_ptm.es1, this.categoryList.g4.using_various_ptm.es2],
        ['Students Feedback - 20'],
        ['Mid-semester feedback', this.categoryList.g5.mid_sem_fb.overall_total, this.categoryList.g5.mid_sem_fb.os1, this.categoryList.g5.mid_sem_fb.os2, this.categoryList.g5.mid_sem_fb.es1, this.categoryList.g5.mid_sem_fb.es2],
        ['End-semester feedback', this.categoryList.g5.end_sem_fb.overall_total, this.categoryList.g5.end_sem_fb.os1, this.categoryList.g5.end_sem_fb.os2, this.categoryList.g5.end_sem_fb.es1, this.categoryList.g5.end_sem_fb.es2],
        ['Academic Review Meeting feedback', this.categoryList.g5.arm_fb.overall_total, this.categoryList.g5.arm_fb.os1, this.categoryList.g5.arm_fb.os2, this.categoryList.g5.arm_fb.es1, this.categoryList.g5.arm_fb.es2],
        ['Submission of Course Files - 20'],
        ['On time Submission', this.categoryList.g6.on_time_sub.overall_total, this.categoryList.g6.on_time_sub.os1, this.categoryList.g6.on_time_sub.os2, this.categoryList.g6.on_time_sub.es1, this.categoryList.g6.on_time_sub.es2],
        ['Completeness of Course file	', this.categoryList.g6.comp_of_cf.overall_total, this.categoryList.g6.on_time_sub.os1, this.categoryList.g6.comp_of_cf.os2, this.categoryList.g6.comp_of_cf.es1, this.categoryList.g6.comp_of_cf.es2],
        ['Performance in Internal Assessment - 80'],
        ['1. If Pass % is <60% - zero points 2. Score = (pass % x 80) + increment/decrement in previous IA Note: Only two IA-1 and IA-2 are considered', this.categoryList.g7.pass],
        ['Performance in End Semester Exams - 80'],
        ['1. 1. If Pass % is <60% - zero points 2. Score = (pass % x 80) + Average of increment/decrement in Internal Assesments', this.categoryList.g8.pass],
      ]
    });
    doc.text('Research & Development Activities - 200', 10, 245);
    autoTable(doc, {
      head: [['Parameter', 'Total - 200', 'Mark obtained']],
      body: [
        ['FDP(Minimum 5 Days)/Workshop/Seminar attended'],
        ['FDP outside State',this.categoryList2.g1.fdp_out.overall_total,this.categoryList2.g1.fdp_out.marks],
        ['FDP within State',this.categoryList2.g1.fdp_in.overall_total,this.categoryList2.g1.fdp_in.marks],
        ['Workshop/Seminar',this.categoryList2.g1.workshop_seminar.overall_total,this.categoryList2.g1.workshop_seminar.marks],
        ['Journal Publications'],
        ['UGC CARE Journal(each)',this.categoryList2.g2.ugc_care_journal.overall_total,this.categoryList2.g2.ugc_care_journal.marks],
        ['SCI Indexed/Wos Journal',this.categoryList2.g2.sci_ind_wos_journal.overall_total,this.categoryList2.g2.sci_ind_wos_journal.marks],
        ['Conference/Technical Book Publications(With ISBN Number)'],
        ['National/International Conference',this.categoryList2.g3.national_intl_conference.overall_total,this.categoryList2.g3.national_intl_conference.marks],
        ['Book/Book Chapter Publications',this.categoryList2.g3.book_publication.overall_total,this.categoryList2.g3.book_publication.marks],
        ['Seminar/Workshop proposals submitted to Funding Agency'],
        ['Proposal Submission',this.categoryList2.g4.proposal_submission.overall_total,this.categoryList2.g4.proposal_submission.marks],
        ['Grant Recieved from Funding Agencies'],
        ['Less than 1 Lakh(each-10)',this.categoryList2.g5.less_than_one.overall_total,this.categoryList2.g5.less_than_one.marks],
        ['1 lakh-5 lakhs(each-20)',this.categoryList2.g5.one_five_lakh.overall_total,this.categoryList2.g5.one_five_lakh.marks],
        ['More than 5 Lakhs',this.categoryList2.g5.more_than_five.overall_total,this.categoryList2.g5.more_than_five.marks],
      ]
    });
    doc.text('First Year Development Activities - 300', 10, 160);
    autoTable(doc, {
      head: [['Parameter', 'Total - 200', 'Mark obtained']],
      body: [
        ['Overall First year Result in End Semester Examinations in Preious Academic Year Minimum Target = 60% 1. If pass % is < 60% - zero points 1. Score = (Placement % x 30) / 90', this.categoryList3.g1.overall_firstyear_result.overall_total,this.categoryList3.g1.overall_firstyear_result.sum],
        ['Overall Department Result(physics,chemistry,maths & english) in End Semester Examinations in Previous Academic Year Minimum Target = 60% 1. If pass % is < 60% - zero points 2. Score = (pass % x 60) / 90', this.categoryList3.g1.overall_dept_result.overall_total,this.categoryList3.g1.overall_dept_result.sum],
        ['FDS / STTP / Workshop / Seminar Attended by Faculty members Minimum Target = 90%', this.categoryList3.g2.fds_sttp.overall_total,this.categoryList3.g2.fds_sttp.sum],
        ['Certificate Courses (NPTEL / SWAYAM / etc) completed by Faculty members Minimum Target = 90%', this.categoryList3.g3.cert_courses.overall_total,this.categoryList3.g3.cert_courses.sum],
        ['Guest Lecture / Workshop / Seminars Organized related to, 1. IPR / Research methodology / Entrepreneurship(10) Minimum Target = 4 2. Professional Ethics / VAC on LIfe Skills(10) Minimum Target = 20', this.categoryList3.g4.guest_lecture.overall_total,this.categoryList3.g4.guest_lecture.sum],
        ['Funding Proposals Project Proposal (10) - (each -5) Other Proposal (10) - (each - 2)', this.categoryList3.g5.funding_prop.overall_total,this.categoryList3.g5.funding_prop.sum],
        ['Conference / Book Publication (with ISBN only) Score = (No. of Conference Publication / No. of faculty) x 10 Minimum Target = 80% of Faculty No. of Book Publications - (each 10) Target = 2 per year', this.categoryList3.g6.conf_book_proposal.overall_total,this.categoryList3.g6.conf_book_proposal.sum],
        ['Journal Publication Score = (No. of Publications in peer reviewed / No. of faculty with less than 5 year) x 10 Score = (No. of Publications in UGC CARE / No. of faculty with above 5 year) x 10 Score = (No. of Publications in SCI indexed or WoS / No. of faculty with Ph.D.) x 10', this.categoryList3.g7.journal_publ.overall_total,this.categoryList3.g7.journal_publ.sum],
        ['Membership in professional society (IE, IETE, SAE, ISHRAE, CSI, IEEE, etc.) Minimum Target = 80% of faculty', this.categoryList3.g8.membership.overall_total,this.categoryList3.g8.membership.sum],
        ['Grants Received & Consultancy'],
        ['1. Grants Received through funding - 10 (For every Rs.50,000-1) 2. consultancy - 10 (For every Rs.50,000-1) 3. Any Grant received through funding / Consultancy with more than 20 lakhs - 20', this.categoryList3.g9.grants_rec.overall_total,this.categoryList3.g9.grants_rec.sum],
        ['Awards & Recognition'],
        ['1. State Leave (each 4) 2. National Leavel (each 5)', this.categoryList3.g10.awards.overall_total,this.categoryList3.g10.awards.sum],
      ]
    });
    doc.text('Student Development Activities - 100', 10, 140);
    autoTable(doc, {
      head: [['Parameter', 'Total - 200', 'Mark obtained']],
      body: [
        ['Membership in professional society score = (No. of students with membership in professional society / Total No. of student I Year to IV Year) x 10 Minimum Target = 70%', this.categoryList4.g1.membership.overall_total,this.categoryList4.g1.membership.sum],
        ['Participation in Co-curricular Activity (Paper presentation / Events / Workshop / Seminars ect. in other institutions) score = (No. of students presented paper or participated in events / No. of students in I Year and II Year) x 10 Minimum Target = 70% score = (No. of students participated in workshop or seminars / No. of student in II and III Year) x 10 Minimum Target = 70%', this.categoryList4.g2.part_in_cocurr.overall_total,this.categoryList4.g2.part_in_cocurr.sum],
        ['Value Added Courses Attended score = (No. of students attended / Total No. of students I to IV Year) x 10 Minimum Target = 100%', this.categoryList4.g3.val_added.overall_total,this.categoryList4.g3.val_added.sum],
        ['Participation in Extracurricular and Extension activities (Sports, NSS, YRC, ect.) Score = (No. of students attended / Total No. of students I Year to IV Year) x 5 Minimum Target = 25% Score = (No. of students participated in extension activities / Total No. of students I Year to IV Year) x 5 Minimum Target = 75%', this.categoryList4.g4.part_in_extracurr.overall_total,this.categoryList4.g4.part_in_extracurr.sum],
        ['Prizes, Awards and Recognition 1. State Leave - (each 1) 2. National Level - (each 2)', this.categoryList4.g5.prizes.overall_total,this.categoryList4.g5.prizes.sum],
      ]
    });
    doc.save('academic-report.pdf');
}
}