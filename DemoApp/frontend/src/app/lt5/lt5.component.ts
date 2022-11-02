import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lt5",
  templateUrl: "./lt5.component.html",
  styleUrls: ["./lt5.component.scss"],
})
export class Lt5Component implements OnInit {
  constructor() {}

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
        overall_total: 0,
      },
      training_outcome: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      grand_total: 0,
    },
    g2: {
      guest_lecture: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      outcome_achieved: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      grand_total: 0,
    },
    g3: {
      mou_signed: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      impact_of_ic: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      grand_total: 0,
    },
    g4: {
      vac_faculty_team: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      vac_faculty_industry: {
        marks: 0,
        sum: 0,
        overall_total: 0,
      },
      vac_industry_resources: {
        marks: 0,
        sum: 0,
        overall_total: 0,
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
        overall_total: 0,
      },
      b: {
        marks: 0,
        sum: 0,
        overall_total: 0,
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

  ngOnInit(): void {}

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
  mActive(arg:any){
    if(arg){
      this.active_flag = (this.active_flag < this.max_list) ? this.active_flag + 1 : this.active_flag;
    }else{
      this.active_flag = (this.active_flag > 0) ? this.active_flag - 1 : this.active_flag;
    }
  }

}
