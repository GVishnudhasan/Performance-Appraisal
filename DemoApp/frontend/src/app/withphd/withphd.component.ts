import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-withphd',
  templateUrl: './withphd.component.html',
  styleUrls: ['./withphd.component.scss']
})
export class WithphdComponent implements OnInit {

  // constructor() { }
  academic_Activities: FormGroup | any;
  skillDevelopment_Activities: FormGroup | any;
  researchDevelopment_Activities: FormGroup | any;
  administrativeExtension_Activities: FormGroup | any;
  ratingByHoDPrincipal: FormGroup | any;


  minmax: any;
  constructor(private fb: FormBuilder, private toastr: ToastrService) { }


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
    },
    g8: {
        pass: 0,
        score: 0,
    },
    g9: {
      lab_manual_prep: {
      os1: 0,
      os2: 0,
      es1: 0,
      es2: 0,
      sum: 0,
      overall_total: 10,
    },
    std_of_lab: {
      os1: 0,
      os2: 0,
      es1: 0,
      es2: 0,
      sum: 0,
      overall_total: 20,
    },
    content_beyond_syll: {
      os1: 0,
      os2: 0,
      es1: 0,
      es2: 0,
      sum: 0,
      overall_total: 10,
    },
    on_time_comp: {
      os1: 0,
      os2: 0,
      es1: 0,
      es2: 0,
      sum: 0,
      overall_total: 20,
    },
    grand_total: 0,
  },
    g10: {
      a: {
      os1: 0,
      os2: 0,
      es1: 0,
      es2: 0,
      sum: 0,
      overall_total: 10,
    },
    b: {
      os1: 0,
      os2: 0,
      es1: 0,
      es2: 0,
      sum: 0,
      overall_total: 10,
    },
    c: {
      os1: 0,
      os2: 0,
      es1: 0,
      es2: 0,
      sum: 0,
      overall_total: 10,
    },
    d: {
      os1: 0,
      os2: 0,
      es1: 0,
      es2: 0,
      sum: 0,
      overall_total: 10,
    },
    grand_total: 0,
  },

  
  };
  categoryList1 = {
    g1: {
      training_tier_1_ind: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
      training_tier_2_tier_3_ind: {
        marks: 0,
        sum: 0,
        overall_total: 5,
      },
      training_outcome:{
        marks:0,
        sum:0,
        overall_total: 10,


      },
      grand_total: 0,
    },
    g2: {
      guest_lecture: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      grand_total: 0,
    },
    g3: {
      mou_signed: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      impact_of_ic: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g4: {
      vac_faculty_team: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      vac_faculty_industry: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      vac_industry_resources: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      grand_total: 0,
    },
    g5: {
      impact_of_mentoring: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      a: {
        marks: 0,
        sum: 0,
        overall_total: 40,
      },
      b: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
  };
  categoryList2 = {
    g1: {
      course_comp_cert: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      course_comp_cert_elite: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },
    g2: {
      fdp_out: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      fdp_in: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
      workshop_seminar: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },
    g3: {
      peer_reviewed_journal: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
      ugc_care_journal: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      sci_ind_wos_journal:{
        marks:0,
        sum:0,
        overall_total:40
      },
      grand_total: 0,
    },

  
    g4: {
      national_intl_conference: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      book_publication: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g5: {
      proposal_submission: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g6: {
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
    g7: {
      patents_published: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      consultancy_work_less: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
      consultancy_work_more: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
  };
  categoryList3 = {
    g1: {
      dept_lvl_resp: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      rating_for_eff_hod: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      ins_lvl_resp: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      rating_for_eff_pric: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g2: {
      part_ext_act: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      grand_total: 0,
    },
    g3: {
      awards_recieved: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
  };
  categoryList4= {
    g1: {
      dept_lvl_resp: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g2:{
      doc_main_reg_upd: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g3:{
    
      inv_dept_dev: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g4:{
      comp_wrk_withot_follow: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g5:{
      rating_princi_manage: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
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
      lab_manual_prep_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      lab_manual_prep_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      lab_manual_prep_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      lab_manual_prep_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      std_of_lab_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      std_of_lab_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      std_of_lab_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      std_of_lab_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      content_beyond_syll_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      content_beyond_syll_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      content_beyond_syll_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      content_beyond_syll_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_comp_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_comp_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_comp_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      on_time_comp_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      a_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      a_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      a_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      a_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      b_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      b_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      b_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      b_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      c_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      c_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      c_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      c_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      d_os1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      d_os2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      d_es1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      d_es2: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
    }),

      // Research and Development
      this.researchDevelopment_Activities = fb.group({
      course_comp_cert: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      course_comp_cert_elite: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      fdp_out: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      fdp_in: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      workshop_seminar: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      peer_reviewed_journal: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      ugc_care_journal: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      sci_ind_wos_journal: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      national_intl_conference: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      book_publication: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      proposal_submission: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      less_than_one: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      one_five_lakh: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      more_than_five: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      patents_published: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      consultancy_work_less: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      }),
      
      //AEA
      this.administrativeExtension_Activities = fb.group({
      dept_lvl_resp: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      rating_for_eff_hod: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      ins_lvl_resp: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      rating_for_eff_pric: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      part_ext_act: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      awards_recieved: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      }),

      
      //skillDevelopment_Activities
      this.skillDevelopment_Activities = fb.group({
      training_at_t1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      training_at_t23: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      training_outcome: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      guest_lecture: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      mou_signed: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      impact_of_ic: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      vac_faculty_team: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      vac_faculty_industry: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      vac_industry_resources: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      impact_of_mentoring: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      a: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      b: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
      }),


       //Rating by HoD, Prinipal
       this.ratingByHoDPrincipal = fb.group({
       dept_lvl_resp_1: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
       doc_main_reg_upd: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
       inv_dept_dev: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
       comp_wrk_withot_follow: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
       rating_princi_manage: fb.control('', [Validators.required, Validators.min(0), Validators.max(20)]),
    });
  }

  get f() { return this.academic_Activities.controls; }
  get f1() { return this.skillDevelopment_Activities.controls; }
  get f2() { return this.researchDevelopment_Activities.controls; }
  get f3() { return this.administrativeExtension_Activities.controls; }
  get f4() { return this.ratingByHoDPrincipal.controls; }


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

    //cl - g9
    this.categoryList.g9.lab_manual_prep.sum =
      (this.categoryList.g9.lab_manual_prep.os1 +
        this.categoryList.g9.lab_manual_prep.os2 +
        this.categoryList.g9.lab_manual_prep.es1 +
        this.categoryList.g9.lab_manual_prep.es2) /
      4;

    this.categoryList.g9.std_of_lab.sum =
      (this.categoryList.g9.std_of_lab.os1 +
        this.categoryList.g9.std_of_lab.os2 +
        this.categoryList.g9.std_of_lab.es1 +
        this.categoryList.g9.std_of_lab.es2) /
      4;

    this.categoryList.g9.content_beyond_syll.sum =
      (this.categoryList.g9.content_beyond_syll.os1 +
        this.categoryList.g9.content_beyond_syll.os2 +
        this.categoryList.g9.content_beyond_syll.es1 +
        this.categoryList.g9.content_beyond_syll.es2) /
      4;

    this.categoryList.g9.on_time_comp.sum =
      (this.categoryList.g9.on_time_comp.os1 +
        this.categoryList.g9.on_time_comp.os2 +
        this.categoryList.g9.on_time_comp.es1 +
        this.categoryList.g9.on_time_comp.es2) /
      4;

    this.categoryList.g9.grand_total =
      this.categoryList.g9.lab_manual_prep.sum +
      this.categoryList.g9.content_beyond_syll.sum +
      this.categoryList.g9.std_of_lab.sum +
      this.categoryList.g9.on_time_comp.sum;

    //cl - g10
    this.categoryList.g10.a.sum =
      (this.categoryList.g10.a.os1 +
        this.categoryList.g10.a.os2 +
        this.categoryList.g10.a.es1 +
        this.categoryList.g10.a.es2) /
      4;

    this.categoryList.g10.b.sum =
      (this.categoryList.g10.b.os1 +
        this.categoryList.g10.b.os2 +
        this.categoryList.g10.b.es1 +
        this.categoryList.g10.b.es2) /
      4;

    this.categoryList.g10.c.sum =
      (this.categoryList.g10.c.os1 +
        this.categoryList.g10.c.os2 +
        this.categoryList.g10.c.es1 +
        this.categoryList.g10.c.es2) /
      4;

    this.categoryList.g10.d.sum =
      (this.categoryList.g10.d.os1 +
        this.categoryList.g10.d.os2 +
        this.categoryList.g10.d.es1 +
        this.categoryList.g10.d.es2) /
      4;

    this.categoryList.g10.grand_total =
      this.categoryList.g10.a.sum +
      this.categoryList.g10.c.sum +
      this.categoryList.g10.b.sum +
      this.categoryList.g10.d.sum;

      this.categoryList1.g1.grand_total =
      this.categoryList1.g1.training_tier_1_ind.marks +
      this.categoryList1.g1.training_tier_2_tier_3_ind.marks +
      this.categoryList1.g1.training_outcome.marks;

    //cl1 - g2

    this.categoryList1.g2.grand_total =
      this.categoryList1.g2.guest_lecture.marks;

    //cl1 - g3

    this.categoryList1.g3.grand_total =
      this.categoryList1.g3.mou_signed.marks +
      this.categoryList1.g3.impact_of_ic.marks;

    //cl1 - g4

    this.categoryList1.g4.grand_total =
      this.categoryList1.g4.vac_faculty_industry.marks +
      this.categoryList1.g4.vac_faculty_team.marks +
      this.categoryList1.g4.vac_industry_resources.marks;

    //cl1 - g5

    this.categoryList1.g5.grand_total =
      this.categoryList1.g5.impact_of_mentoring.marks +
      this.categoryList1.g5.a.marks +
      this.categoryList1.g5.b.marks;

      this.categoryList2.g1.grand_total =
      this.categoryList2.g1.course_comp_cert.marks +
      this.categoryList2.g1.course_comp_cert_elite.marks;

    //cl2 - g2

    this.categoryList2.g2.grand_total =
      this.categoryList2.g2.fdp_out.marks +
      this.categoryList2.g2.fdp_in.marks +
      this.categoryList2.g2.workshop_seminar.marks;

    //cl2 - g3

    this.categoryList2.g3.grand_total =
      this.categoryList2.g3.peer_reviewed_journal.marks +
      this.categoryList2.g3.ugc_care_journal.marks;
      this.categoryList2.g3.sci_ind_wos_journal.marks;


    //cl2 - g4

    this.categoryList2.g4.grand_total =
      this.categoryList2.g4.national_intl_conference.marks +
      this.categoryList2.g4.book_publication.marks;

    //cl2 - g5

    this.categoryList2.g5.grand_total =
      this.categoryList2.g5.proposal_submission.marks;

    //cl2 - g6

    this.categoryList2.g6.grand_total =
      this.categoryList2.g6.less_than_one.marks +
      this.categoryList2.g6.one_five_lakh.marks +
      this.categoryList2.g6.more_than_five.marks;


    this.categoryList2.g7.grand_total =
      this.categoryList2.g7.patents_published.marks +
      this.categoryList2.g7.consultancy_work_less.marks;
      this.categoryList2.g7.consultancy_work_more.marks;

      this.categoryList3.g1.grand_total =
      this.categoryList3.g1.dept_lvl_resp.marks +
      this.categoryList3.g1.ins_lvl_resp.marks +
      this.categoryList3.g1.rating_for_eff_hod.marks +
      this.categoryList3.g1.rating_for_eff_pric.marks;

    //cl3 - g2

    this.categoryList3.g2.grand_total =
      this.categoryList3.g2.part_ext_act.marks;

    //cl2 - g3

    this.categoryList3.g3.grand_total =
      this.categoryList3.g3.awards_recieved.marks;
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
    await this.toastr[(tag) ? 'success' : 'error'](title, message, {
      timeOut: 3000,
    });
  }
}