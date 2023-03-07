import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
// import html2canvas from 'html2canvas';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { deflateSync } from "zlib";
import { DeclareFunctionStmt } from "@angular/compiler";

@Component({
  selector: "app-lt5",
  templateUrl: "./lt5.component.html",
  styleUrls: ["./lt5.component.scss"],
})
export class Lt5Component implements OnInit {
  academic_Activities: FormGroup | any;
  skillDevelopment_Activities: FormGroup | any;
  researchDevelopment_Activities: FormGroup | any;
  administrativeExtension_Activities: FormGroup | any;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  }

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
        overall_total: 20,
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
        overall_total: 20,
      },
      grand_total: 0,
    },
  };

  categoryList1 = {
    g1: {
      training_at_industry: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
      training_outcome: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },
    g2: {
      guest_lecture: {
        marks: 0,
        sum: 0,
        overall_total: 30,
      },
      outcome_achieved: {
        marks: 0,
        sum: 0,
        overall_total: 10,
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
        overall_total: 10,
      },
      vac_industry_resources: {
        marks: 0,
        sum: 0,
        overall_total: 10,
      },
      grand_total: 0,
    },
    g5: {
      impact_of_mentoring: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      a: {
        marks: 0,
        sum: 0,
        overall_total: 20,
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
        overall_total: 30,
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
        overall_total: 40,
      },
      fdp_in: {
        marks: 0,
        sum: 0,
        overall_total: 30,
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
        overall_total: 20,
      },
      ugc_care_journal: {
        marks: 0,
        sum: 0,
        overall_total: 20,
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
        overall_total: 20,
      },
      more_than_one: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      grand_total: 0,
    },
    g7: {
      patents_published: {
        marks: 0,
        sum: 0,
        overall_total: 20,
      },
      consultancy_work: {
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

  ngOnInit(): void {
    const fb = this.fb;
    (this.academic_Activities = fb.group({
      qty_of_class_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      qty_of_class_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      qty_of_class_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      qty_of_class_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      qb_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      qb_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      qb_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      qb_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      rf_book_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      rf_book_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      rf_book_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      rf_book_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      qty_of_videomaterial_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      qty_of_videomaterial_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      qty_of_videomaterial_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      qty_of_videomaterial_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      prep_of_videomaterial_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      prep_of_videomaterial_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      prep_of_videomaterial_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      prep_of_videomaterial_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      gate_or_refbook_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      gate_or_refbook_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      gate_or_refbook_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      gate_or_refbook_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      usage_of_bt_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      usage_of_bt_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      usage_of_bt_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      usage_of_bt_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      on_time_sub_qp_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      on_time_sub_qp_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      on_time_sub_qp_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      on_time_sub_qp_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      prep_of_ppt_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      prep_of_ppt_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      prep_of_ppt_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      prep_of_ppt_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      using_various_ptm_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      using_various_ptm_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      using_various_ptm_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      using_various_ptm_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      mid_sem_fb_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      mid_sem_fb_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      mid_sem_fb_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      mid_sem_fb_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      end_sem_fb_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      end_sem_fb_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      end_sem_fb_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      end_sem_fb_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(5),
      ]),
      arm_fb_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      arm_fb_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      arm_fb_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      arm_fb_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      on_time_sub_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      on_time_sub_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      on_time_sub_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      on_time_sub_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      comp_of_cf_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      comp_of_cf_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      comp_of_cf_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      comp_of_cf_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      pass: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(80),
      ]),
      pass_1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(80),
      ]),
      lab_manual_prep_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      lab_manual_prep_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      lab_manual_prep_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      lab_manual_prep_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      std_of_lab_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      std_of_lab_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      std_of_lab_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      std_of_lab_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      content_beyond_syll_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      content_beyond_syll_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      content_beyond_syll_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      content_beyond_syll_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      on_time_comp_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      on_time_comp_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      on_time_comp_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      on_time_comp_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(20),
      ]),
      a_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      a_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      a_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      a_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      b_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      b_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      b_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      b_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      c_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      c_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      c_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      c_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      d_os1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      d_os2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      d_es1: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
      d_es2: fb.control("", [
        Validators.required,
        Validators.min(0),
        Validators.max(10),
      ]),
    })),
      (this.skillDevelopment_Activities = fb.group({
        training_at_industry: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ]),
        training_outcome: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ]),
        guest_lecture: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(30),
        ]),
        outcome_achieved: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ]),
        mou_signed: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        impact_of_ic: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        impact_of_mentoring: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ]),
        vac_faculty_team: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        vac_faculty_teams: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ]),
        vac_industry_resources: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ]),
        a: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        b: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
      })),
      (this.researchDevelopment_Activities = fb.group({
        course_comp_cert: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(30),
        ]),
        course_comp_cert_elite: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ]),
        fdp_out: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(40),
        ]),
        fdp_in: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(30),
        ]),
        workshop_seminar: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ]),
        peer_reviewed_journal: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        ugc_care_journal: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        national_intl_conference: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        book_publication: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        proposal_submission: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        less_than_one: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        more_than_one: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        patents_published: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        consultancy_work: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
      })),
      (this.administrativeExtension_Activities = fb.group({
        dept_lvl_resp: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(30),
        ]),
        rating_for_eff_hod: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        ins_lvl_resp: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(30),
        ]),
        rating_for_eff_pric: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
        part_ext_act: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(30),
        ]),
        awards_recieved: fb.control("", [
          Validators.required,
          Validators.min(0),
          Validators.max(20),
        ]),
      }));
  }

  get f() {
    return this.academic_Activities.controls;
  }
  get f1() {
    return this.skillDevelopment_Activities.controls;
  }
  get f2() {
    return this.researchDevelopment_Activities.controls;
  }
  get f3() {
    return this.administrativeExtension_Activities.controls;
  }

  async setmap() {
    await this.opt_data();
    if (this.active_flag == 0) {
      console.log(this.categoryList);
    }
    if (this.active_flag == 1) {
      console.log(this.categoryList1);
    }
    if (this.active_flag == 2) {
      console.log(this.categoryList2);
    }
    if (this.active_flag == 3) {
      console.log(this.categoryList3);
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

    //cl1 - g1

    this.categoryList1.g1.grand_total =
      this.categoryList1.g1.training_at_industry.marks +
      this.categoryList1.g1.training_outcome.marks;

    //cl1 - g2

    this.categoryList1.g2.grand_total =
      this.categoryList1.g2.guest_lecture.marks +
      this.categoryList1.g2.outcome_achieved.marks;

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

    //cl2 - g1

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
      this.categoryList2.g6.more_than_one.marks;

    //cl2 - g7

    this.categoryList2.g7.grand_total =
      this.categoryList2.g7.patents_published.marks +
      this.categoryList2.g7.consultancy_work.marks;

    //cl3 - g1

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
  mActive(arg: any) {
    if (arg) {
      this.active_flag =
        this.active_flag < this.max_list
          ? this.active_flag + 1
          : this.active_flag;
    } else {
      this.active_flag =
        this.active_flag > 0 ? this.active_flag - 1 : this.active_flag;
    }
  }

  async mToastMsg(tag: boolean, title: any, message: any) {
    await this.toastr[tag ? "success" : "error"](title, message, {
      timeOut: 3000,
    });
  }

  // Generate PDF

  async mGeneratePDF1() {
    const doc = new jsPDF();
    doc.text("Academic Performance Parameters", 10, 10);
    autoTable(doc, {
      head: [
        [
          "Parameter",
          "Total - 400",
          "Marks obtained in ODD-S1",
          "Marks obtained in ODD-S2",
          "Marks obtained in EVEN-S1",
          "Marks obtained in EVEN-S2",
        ],
      ],
      body: [
        [
          "Quality of class notes",
          this.categoryList.g1.qty_of_class.overall_total,
          this.categoryList.g1.qty_of_class.os1,
          this.categoryList.g1.qty_of_class.os2,
          this.categoryList.g1.qty_of_class.es1,
          this.categoryList.g1.qty_of_class.es2,
        ],
        [
          "Question bank (Univ., 2 marks & 16 marks)",
          this.categoryList.g1.qb.overall_total,
          this.categoryList.g1.qb.os1,
          this.categoryList.g1.qb.os2,
          this.categoryList.g1.qb.es1,
          this.categoryList.g1.qb.es2,
        ],
        [
          "Ref. Book / Univ. QP Problem solving",
          this.categoryList.g1.rf_book.overall_total,
          this.categoryList.g1.rf_book.os1,
          this.categoryList.g1.rf_book.os2,
          this.categoryList.g1.rf_book.es1,
          this.categoryList.g1.rf_book.es2,
        ],
        ["", "", "Preparation", "of video", " material", " - 20"],
        [
          "Quality of video material",
          this.categoryList.g2.qty_of_videomaterial.overall_total,
          this.categoryList.g2.qty_of_videomaterial.os1,
          this.categoryList.g2.qty_of_videomaterial.os2,
          this.categoryList.g2.qty_of_videomaterial.es1,
          this.categoryList.g2.qty_of_videomaterial.es2,
        ],
        [
          "Preparation of video material	l",
          this.categoryList.g2.prep_of_videomaterial.overall_total,
          this.categoryList.g2.prep_of_videomaterial.os1,
          this.categoryList.g2.prep_of_videomaterial.os2,
          this.categoryList.g2.prep_of_videomaterial.es1,
          this.categoryList.g2.prep_of_videomaterial.es2,
        ],
        ["Standard of IA / Assignment / Tutorial QP - 20"],
        [
          "GATE / Ref. Book Questions",
          this.categoryList.g3.gate_or_refbook.overall_total,
          this.categoryList.g3.gate_or_refbook.os1,
          this.categoryList.g3.gate_or_refbook.os2,
          this.categoryList.g3.gate_or_refbook.es1,
          this.categoryList.g3.gate_or_refbook.es2,
        ],
        [
          "Usage of Blooms Taxonomy",
          this.categoryList.g3.usage_of_bt.overall_total,
          this.categoryList.g3.usage_of_bt.os1,
          this.categoryList.g3.usage_of_bt.os2,
          this.categoryList.g3.usage_of_bt.es1,
          this.categoryList.g3.usage_of_bt.es2,
        ],
        [
          "On time submission of Question Papers",
          this.categoryList.g3.on_time_sub_qp.overall_total,
          this.categoryList.g3.on_time_sub_qp.os1,
          this.categoryList.g3.on_time_sub_qp.os2,
          this.categoryList.g3.on_time_sub_qp.es1,
          this.categoryList.g3.on_time_sub_qp.es2,
        ],
        ["Innovation in Teaching & Learning - 20"],
        [
          "Preparation of PPT",
          this.categoryList.g4.prep_of_ppt.overall_total,
          this.categoryList.g4.prep_of_ppt.os1,
          this.categoryList.g4.prep_of_ppt.os2,
          this.categoryList.g4.prep_of_ppt.es1,
          this.categoryList.g4.prep_of_ppt.es2,
        ],
        [
          "Using various Pedagogical teaching methods",
          this.categoryList.g4.using_various_ptm.overall_total,
          this.categoryList.g4.using_various_ptm.os1,
          this.categoryList.g4.using_various_ptm.os2,
          this.categoryList.g4.using_various_ptm.es1,
          this.categoryList.g4.using_various_ptm.es2,
        ],
        ["Students Feedback - 20"],
        [
          "Mid-semester feedback",
          this.categoryList.g5.mid_sem_fb.overall_total,
          this.categoryList.g5.mid_sem_fb.os1,
          this.categoryList.g5.mid_sem_fb.os2,
          this.categoryList.g5.mid_sem_fb.es1,
          this.categoryList.g5.mid_sem_fb.es2,
        ],
        [
          "End-semester feedback",
          this.categoryList.g5.end_sem_fb.overall_total,
          this.categoryList.g5.end_sem_fb.os1,
          this.categoryList.g5.end_sem_fb.os2,
          this.categoryList.g5.end_sem_fb.es1,
          this.categoryList.g5.end_sem_fb.es2,
        ],
        [
          "Academic Review Meeting feedback",
          this.categoryList.g5.arm_fb.overall_total,
          this.categoryList.g5.arm_fb.os1,
          this.categoryList.g5.arm_fb.os2,
          this.categoryList.g5.arm_fb.es1,
          this.categoryList.g5.arm_fb.es2,
        ],
        ["Submission of Course Files - 20"],
        [
          "On time Submission",
          this.categoryList.g6.on_time_sub.overall_total,
          this.categoryList.g6.on_time_sub.os1,
          this.categoryList.g6.on_time_sub.os2,
          this.categoryList.g6.on_time_sub.es1,
          this.categoryList.g6.on_time_sub.es2,
        ],
        [
          "Completeness of Course file",
          this.categoryList.g6.comp_of_cf.overall_total,
          this.categoryList.g6.comp_of_cf.os1,
          this.categoryList.g6.comp_of_cf.os2,
          this.categoryList.g6.comp_of_cf.es1,
          this.categoryList.g6.comp_of_cf.es2,
        ],
        ["Performance in Internal Assessment - 80"],
        [
          "1. If Pass % is <60% - zero points 2. Score = (pass % x 80) + increment/decrement in previous IA Note: Only two IA-1 and IA-2 are considered",
          this.categoryList.g7.pass,
        ],
        ["Performance in End Semester Exams - 80"],
        [
          "1. If Pass % is <60% - zero points 2. Score = (pass % x 80) + Average of increment/decrement in Internal Assesments",
          this.categoryList.g8.pass,
        ],
        ["Effectiveness of Lab conduction - 60"],
        [
          "Lab Manual Preparation",
          this.categoryList.g9.lab_manual_prep.overall_total,
          this.categoryList.g9.lab_manual_prep.os1,
          this.categoryList.g9.lab_manual_prep.os2,
          this.categoryList.g9.lab_manual_prep.es1,
          this.categoryList.g9.lab_manual_prep.es2,
        ],
        [
          "Standard of Prelab and Postlab Questions and Conduction",
          this.categoryList.g9.std_of_lab.overall_total,
          this.categoryList.g9.std_of_lab.os1,
          this.categoryList.g9.std_of_lab.os2,
          this.categoryList.g9.std_of_lab.es1,
          this.categoryList.g9.std_of_lab.es2,
        ],
        [
          "Content Beyond Syllabus",
          this.categoryList.g9.content_beyond_syll.overall_total,
          this.categoryList.g9.content_beyond_syll.os1,
          this.categoryList.g9.content_beyond_syll.os2,
          this.categoryList.g9.content_beyond_syll.es1,
          this.categoryList.g9.content_beyond_syll.es2,
        ],
        [
          "On time completion of Exercises",
          this.categoryList.g9.on_time_comp.overall_total,
          this.categoryList.g9.on_time_comp.os1,
          this.categoryList.g9.on_time_comp.os2,
          this.categoryList.g9.on_time_comp.es1,
          this.categoryList.g9.on_time_comp.es2,
        ],
        ["Impact of mentoring in academic performance - 40"],
        [
          "Certification in NPTEL/MOOCSA = 2 * (No. of students completed courses/Total no. of students) x 10",
          this.categoryList.g10.a.overall_total,
          this.categoryList.g10.a.os1,
          this.categoryList.g10.a.os2,
          this.categoryList.g10.a.es1,
          this.categoryList.g10.a.es2,
        ],
        [
          "Performance in Internal Assessment (A) B = (No. of students pass/ Total no. of students) x 10",
          this.categoryList.g10.b.overall_total,
          this.categoryList.g10.b.os1,
          this.categoryList.g10.b.os2,
          this.categoryList.g10.b.es1,
          this.categoryList.g10.b.es2,
        ],
        [
          "Performance in End semester Assessment(first class) C = (No. of students in first class/ Total no. of students) x 20",
          this.categoryList.g10.c.overall_total,
          this.categoryList.g10.c.os1,
          this.categoryList.g10.c.os2,
          this.categoryList.g10.c.es1,
          this.categoryList.g10.c.es2,
        ],
        [
          "Performance in End semester Assessment(Distinction)   D = 4 * (No. of students in Distinction /Total no. of students) x 10",
          this.categoryList.g10.d.overall_total,
          this.categoryList.g10.d.os1,
          this.categoryList.g10.d.os2,
          this.categoryList.g10.d.es1,
          this.categoryList.g10.d.es2,
        ],
      ],
    });
    doc.text("Research & Development Activities - 200", 10, 260);
    autoTable(doc, {});
    doc.save("academic-report.pdf");
  }

  async mGeneratePDF2() {
    const doc = new jsPDF();
    doc.text("Skill Development Activities - 200", 10, 10);
    autoTable(doc, {
      head: [["Parameter", "Total - 200", "Mark obtained"]],
      body: [
        ["Industrial Training Undergone(Min. 2 Days)"],
        [
          "Training at Industry",
          this.categoryList1.g1.training_at_industry.overall_total,
          this.categoryList1.g1.training_at_industry.marks,
        ],
        [
          "Training outcome (Guest Lecture, IPT, Project, consultancy etc)",
          this.categoryList1.g1.training_outcome.overall_total,
          this.categoryList1.g1.training_outcome.marks,
        ],
        ["Academic activities in collaboration with Industries"],
        [
          "Guest Lecture / Industrial Visit(each-15)",
          this.categoryList1.g2.guest_lecture.overall_total,
          this.categoryList1.g2.guest_lecture.marks,
        ],
        [
          "Outcome achieved (Mini Project/Case Study/ Paper Presentation etc) (each-5)",
          this.categoryList1.g2.outcome_achieved.overall_total,
          this.categoryList1.g2.outcome_achieved.marks,
        ],
        ["Initiatives on Industrial collaboration"],
        [
          "MoU Signed with Industry",
          this.categoryList1.g3.mou_signed.overall_total,
          this.categoryList1.g3.mou_signed.marks,
        ],
        [
          "Impact of Industrial collaboration through training to faculty, IPT, VAC, Project, Guest Lecture, Consultancy etc.",
          this.categoryList1.g3.impact_of_ic.overall_total,
          this.categoryList1.g3.impact_of_ic.marks,
        ],
        ["Value Added Courses Conducted by Faculty(Min 30 Hours)"],
        [
          "VAC conducted by the faculty team (Max. 3 Faculty)",
          this.categoryList1.g4.vac_faculty_team.overall_total,
          this.categoryList1.g4.vac_faculty_team.marks,
        ],
        [
          "VAC organised by the faculty in association with industry",
          this.categoryList1.g4.vac_faculty_industry.overall_total,
          this.categoryList1.g4.vac_faculty_industry.marks,
        ],
        [
          "VAC organised joined with industry and resourses Sharing mode (eg:15 hrs our faculty and remaining 15 hrs by experts from industry)",
          this.categoryList1.g4.vac_industry_resources.overall_total,
          this.categoryList1.g4.vac_industry_resources.marks,
        ],
        ["Impact of mentoring in Skill Development"],
        [
          "Impact of mentoring in Skill Development can be measured in term of the following activities 1. Paper Presentation 2. Participation in any technical event 3. Internship/IPT 4. Participation in VAC 5.Participation in project/Desing contest/Hackathon",
          this.categoryList1.g5.impact_of_mentoring.overall_total,
          this.categoryList1.g5.impact_of_mentoring.marks,
        ],
        [
          "A = (No. of students in any of the three mentioned activities /Total no. of students) x 40",
          this.categoryList1.g5.a.overall_total,
          this.categoryList1.g5.a.marks,
        ],
        [
          "B = (No. of students won prize in any of the activities /Total no. of students) x 20",
          this.categoryList1.g5.b.overall_total,
          this.categoryList1.g5.b.marks,
        ],
      ],
    });
    doc.save("sda-report.pdf");
  }

  async mGeneratePDF3() {
    const doc = new jsPDF();
    doc.text("Research & Development Activities - 200", 10, 10);
    autoTable(doc, {
      head: [["Parameter", "Total - 200", "Mark obtained"]],
      body: [
        ["Certificate Course Completed(NPTEL/SWAYAM/etc)"],
        [
          "Course completion certificate",
          this.categoryList2.g1.course_comp_cert.overall_total,
          this.categoryList2.g1.course_comp_cert.marks,
        ],
        [
          "Course completion certificate with Elite score and above",
          this.categoryList2.g1.course_comp_cert_elite.overall_total,
          this.categoryList2.g1.course_comp_cert_elite.marks,
        ],
        ["FDP(Minimum 5 Days)/Workshop/Seminar attended"],
        [
          "FDP outside State",
          this.categoryList2.g2.fdp_out.overall_total,
          this.categoryList2.g2.fdp_out.marks,
        ],
        [
          "FDP within State",
          this.categoryList2.g2.fdp_in.overall_total,
          this.categoryList2.g2.fdp_in.marks,
        ],
        [
          "Workshop/Seminar",
          this.categoryList2.g2.workshop_seminar.overall_total,
          this.categoryList2.g2.workshop_seminar.marks,
        ],
        ["Journal Publications"],
        [
          "Peer Reviewed Journal(each)",
          this.categoryList2.g3.peer_reviewed_journal.overall_total,
          this.categoryList2.g3.peer_reviewed_journal.marks,
        ],
        [
          "UGC CARE Journal(each)",
          this.categoryList2.g3.ugc_care_journal.overall_total,
          this.categoryList2.g3.ugc_care_journal.marks,
        ],
        ["Conference/Technical Book Publications(With ISBN Number)"],
        [
          "National/International Conference",
          this.categoryList2.g4.national_intl_conference.overall_total,
          this.categoryList2.g4.national_intl_conference.marks,
        ],
        [
          "Book/Book Chapter Publications",
          this.categoryList2.g4.book_publication.overall_total,
          this.categoryList2.g4.book_publication.marks,
        ],
        ["Seminar/Workshop proposals submitted to Funding Agency"],
        [
          "Proposal Submission",
          this.categoryList2.g5.proposal_submission.overall_total,
          this.categoryList2.g5.proposal_submission.marks,
        ],
        ["Grant Recieved from Funding Agencies"],
        [
          "Less than 1 Lakh(each-10)",
          this.categoryList2.g6.less_than_one.overall_total,
          this.categoryList2.g6.less_than_one.marks,
        ],
        [
          "More than 1 Lakh",
          this.categoryList2.g6.more_than_one.overall_total,
          this.categoryList2.g6.more_than_one.marks,
        ],
        ["Patents / Consultancy works"],
        [
          "Patents Published",
          this.categoryList2.g7.patents_published.overall_total,
          this.categoryList2.g7.patents_published.marks,
        ],
        [
          "Consultancy work",
          this.categoryList2.g7.consultancy_work.overall_total,
          this.categoryList2.g7.consultancy_work.marks,
        ],
      ],
    });
    doc.save("rnd.pdf");
  }

  async mGeneratePDF4() {
    const doc = new jsPDF();
    doc.text("Administrative & Extension Activities - 100", 10, 10);
    autoTable(doc, {
      head: [["Parameter", "Total - 100", "Mark obtained"]],
      body: [
        ["Administrative Responsibilities (Departments & Institution level)"],
        [
          "Department Level Responsibility(each 15)",
          this.categoryList3.g1.dept_lvl_resp.overall_total,
          this.categoryList3.g1.dept_lvl_resp.marks,
        ],
        [
          "Rating for the effectiveness by HoD",
          this.categoryList3.g1.rating_for_eff_hod.overall_total,
          this.categoryList3.g1.rating_for_eff_hod.marks,
        ],
        [
          "Institutional level Responsibility",
          this.categoryList3.g1.ins_lvl_resp.overall_total,
          this.categoryList3.g1.ins_lvl_resp.marks,
        ],
        [
          "Rating for the effectiveness by Principal",
          this.categoryList3.g1.rating_for_eff_pric.overall_total,
          this.categoryList3.g1.rating_for_eff_pric.marks,
        ],
        ["Administrative Responsibilities (Departments & Institution level)"],
        [
          "Participation in Extension Activities conducted by NSS, NCC, UBA, Yoga, eco Club, Rotary, JCI etc. (each 15)",
          this.categoryList3.g2.part_ext_act.overall_total,
          this.categoryList3.g2.part_ext_act.marks,
        ],
        ["Any other Achivements(Specify if any)"],
        [
          "Awards recieved, 100% result, Guest lecture delivered, Resource persons for FDP/Seminar/Workshop/training,Jury/Chief guest for programs, BoS/DAC Member in other institution etc.",
          this.categoryList3.g3.awards_recieved.overall_total,
          this.categoryList3.g3.awards_recieved.marks,
        ],
      ],
    });
    doc.save("aea.pdf");
  }

  async mGeneratePDF() {
    const doc = new jsPDF();
    doc.text("Academic Activities - 400", 10, 10);
    autoTable(doc, {
      head: [
        ["Academic Performance Parameters", "Max. Score", "Obtained Score"],
      ],
      body: [
        ["Standard of Class notes", 40, this.categoryList.g1.grand_total],
        [
          "Preparation of video materials",
          20,
          this.categoryList.g2.grand_total,
        ],
        [
          "Standard of IA / Assignment / Tutorial QP",
          20,
          this.categoryList.g3.grand_total,
        ],
        [
          "Innovation in Teaching and Learning",
          20,
          this.categoryList.g4.grand_total,
        ],
        ["Students Feedback", 20, this.categoryList.g5.grand_total],
        ["Submission of Course files", 20, this.categoryList.g6.grand_total],
        ["Performance in Internal Assessments", 80, this.categoryList.g7.pass],
        ["Performance in End Semester Exams", 80, this.categoryList.g8.pass],
        [
          "Effectiveness in Lab conduction",
          60,
          this.categoryList.g9.grand_total,
        ],
        [
          "Impact of mentoring in academic performance",
          40,
          this.categoryList.g10.grand_total,
        ],
      ],
    });
    doc.text("Skill Development Activities - 200", 10, 100);
    autoTable(doc, {
      head: [
        ["Academic Performance Parameters", "Max. Score", "Obtained Score"],
      ],
      body: [
        ["Standard of Class notes", 40, this.categoryList.g1.grand_total],
        [
          "Preparation of video materials",
          20,
          this.categoryList.g2.grand_total,
        ],
        [
          "Standard of IA / Assignment / Tutorial QP",
          20,
          this.categoryList.g3.grand_total,
        ],
        [
          "Innovation in Teaching and Learning",
          20,
          this.categoryList.g4.grand_total,
        ],
        ["Students Feedback", 20, this.categoryList.g5.grand_total],
        ["Submission of Course files", 20, this.categoryList.g6.grand_total],
        ["Performance in Internal Assessments", 80, this.categoryList.g7.pass],
        ["Performance in End Semester Exams", 80, this.categoryList.g8.pass],
        [
          "Effectiveness in Lab conduction",
          60,
          this.categoryList.g9.grand_total,
        ],
        [
          "Impact of mentoring in academic performance",
          40,
          this.categoryList.g10.grand_total,
        ],
      ],
    });
    doc.text("Research and Development Activities - 200", 10, 190);
    autoTable(doc, {
      head: [
        ["Academic Performance Parameters", "Max. Score", "Obtained Score"],
      ],
      body: [
        ["Standard of Class notes", 40, this.categoryList.g1.grand_total],
        [
          "Preparation of video materials",
          20,
          this.categoryList.g2.grand_total,
        ],
        [
          "Standard of IA / Assignment / Tutorial QP",
          20,
          this.categoryList.g3.grand_total,
        ],
        [
          "Innovation in Teaching and Learning",
          20,
          this.categoryList.g4.grand_total,
        ],
        ["Students Feedback", 20, this.categoryList.g5.grand_total],
        ["Submission of Course files", 20, this.categoryList.g6.grand_total],
        ["Performance in Internal Assessments", 80, this.categoryList.g7.pass],
        ["Performance in End Semester Exams", 80, this.categoryList.g8.pass],
        [
          "Effectiveness in Lab conduction",
          60,
          this.categoryList.g9.grand_total,
        ],
        [
          "Impact of mentoring in academic performance",
          40,
          this.categoryList.g10.grand_total,
        ],
      ],
    });
    doc.text("Administrative and Extension Activities - 100", 10, 290);
    autoTable(doc, {
      head: [
        ["Academic Performance Parameters", "Max. Score", "Obtained Score"],
      ],
      body: [
        ["Standard of Class notes", 40, this.categoryList.g1.grand_total],
        [
          "Preparation of video materials",
          20,
          this.categoryList.g2.grand_total,
        ],
        [
          "Standard of IA / Assignment / Tutorial QP",
          20,
          this.categoryList.g3.grand_total,
        ],
        [
          "Innovation in Teaching and Learning",
          20,
          this.categoryList.g4.grand_total,
        ],
        ["Students Feedback", 20, this.categoryList.g5.grand_total],
        ["Submission of Course files", 20, this.categoryList.g6.grand_total],
        ["Performance in Internal Assessments", 80, this.categoryList.g7.pass],
        ["Performance in End Semester Exams", 80, this.categoryList.g8.pass],
        [
          "Effectiveness in Lab conduction",
          60,
          this.categoryList.g9.grand_total,
        ],
        [
          "Impact of mentoring in academic performance",
          40,
          this.categoryList.g10.grand_total,
        ],
      ],
    });
    doc.save("overall-report.pdf");
  }
}
