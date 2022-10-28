import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hodsnh',
  templateUrl: './hodsnh.component.html',
  styleUrls: ['./hodsnh.component.scss']
})
export class HodsnhComponent implements OnInit {

  constructor() { }
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
  };
  categoryList2 = {
    g1: {
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
    g2: {
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

  
    g3: {
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
    g4: {
      proposal_submission: {
        marks: 0,
        sum: 0,
        overall_total: 20,
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

  ngOnInit(): void {
  }
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

    


      }
    }
