import Link from "next/link";

const answer_question_data = [
  {
    id: 1,
    question: "Who do you provide services for??",
    answer: (
      <>
        Ideally we provide services to NDIS & MyAgedCare Participants (Person
        with approved NDIS funding) however we can also help you step by step
        get NDIS approval if you are eligible.
      </>
    ),
    accordion_id: "headingOne",
    collapsed: "",
    data_bs_target: "#collapseOne",
    aria_expanded: true,
    aria_controls: "collapseOne",
    show: "show",
  },
  {
    id: 2,
    question: "What can I do with my plan now that it has been approved?",
    answer: (
      <>
        Frequently Asked Questions Who do you provide services for? Ideally we
        provide services to NDIS & MyAgedCare Participants (Person with approved
        NDIS funding) however we can also help you step by step get NDIS
        approval if you are eligible. What can I do with my plan now that it has
        been approved? Once your NDIS plan has been approved, you may begin
        contacting providers to begin receiving services you may be eligible
        for. To find out what you are eligible for, you can contact{" "}
        <b>Vserve Australia</b> on <u>1300 343 481</u>.
      </>
    ),
    accordion_id: "headingTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwo",
    aria_expanded: false,
    aria_controls: "collapseTwo",
    show: "",
  },
  {
    id: 3,
    question: "What is a Support worker/Care Worker?",
    answer: (
      <>
        A Support Worker is an individual who is trained and qualified to
        provide supports to a person requiring supports either in home,
        hospital, nursing home or outside in the community.
      </>
    ),
    accordion_id: "headingThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_expanded: false,
    aria_controls: "collapseThree",
    show: "",
  },
  {
    id: 4,
    question: "Do I get charged for the services?",
    answer: (
      <>
        We {"don't"} charge clients for the services. Once approved from{" "}
        {"NDIS/"} MyAgedCare, all your services are funded by NDIS.
      </>
    ),
    accordion_id: "headingFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFour",
    aria_expanded: false,
    aria_controls: "collapseFour",
    show: "",
  },
  {
    id: 5,
    question: "What are your service areas?",
    answer: <>We provide services all over Sydney.</>,
    accordion_id: "headingFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFive",
    aria_expanded: false,
    aria_controls: "collapseFive",
    show: "",
  },
  {
    id: 6,
    question: "I have more questions?",
    answer: (
      <>
        If you have more questions please contact us either by call on{" "}
        <Link aria-label="Vserve" href="tel:1300 343 481">
          <u>1300 343 481</u>
        </Link>{" "}
        or write to us on{" "}
        <Link aria-label="Vserve" href="mailto:care@vserveaustralia.com.au">
          <u>care@vserveaustralia.com.au</u>
        </Link>
      </>
    ),
    accordion_id: "headingSix",
    collapsed: "collapsed",
    data_bs_target: "#collapseSix",
    aria_expanded: false,
    aria_controls: "collapseSix",
    show: "",
  },
];
export default answer_question_data;
