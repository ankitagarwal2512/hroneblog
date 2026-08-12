/* @ds-bundle: {"format":3,"namespace":"HROneDesignSystem_5b2d96","components":[],"sourceHashes":{"ui_kits/hrms/App.jsx":"e1be0453bd7e","ui_kits/hrms/AttendancePage.jsx":"ab48cb7dedf9","ui_kits/hrms/HomePage.jsx":"276fce3631a8","ui_kits/hrms/InboxPage.jsx":"1dd1747584f3","ui_kits/hrms/PayrollPage.jsx":"d92873ec8731","ui_kits/hrms/PeoplePage.jsx":"a25dd0513830","ui_kits/hrms/Shell.jsx":"860fbf9d7323","ui_kits/hrms/primitives.jsx":"db57c02a4854"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HROneDesignSystem_5b2d96 = window.HROneDesignSystem_5b2d96 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/hrms/App.jsx
try { (() => {
function App() {
  const [active, setActive] = useState(() => localStorage.getItem('hrone-nav') || 'home');
  const nav = id => {
    setActive(id);
    localStorage.setItem('hrone-nav', id);
  };
  const titles = {
    home: ['Home', 'Your workplace. Your way.'],
    inbox: ['Inbox', 'InboxforHR™ — 7 open'],
    people: ['People', '312 employees · 12 departments'],
    payroll: ['Payroll', 'March 2026 cycle · closes Apr 28'],
    attendance: ['Attendance', 'April 2026'],
    performance: ['Performance', 'Q2 review cycle'],
    recruit: ['Recruitment', '9 open roles · 47 applicants this week'],
    engage: ['Engagement', 'Recognition & surveys'],
    helpdesk: ['Helpdesk', 'HR tickets'],
    assets: ['Assets', 'Laptops, access cards, devices'],
    reports: ['Reports', 'Analytics library']
  };
  const [title, subtitle] = titles[active] || ['', ''];
  const Page = () => {
    switch (active) {
      case 'home':
        return /*#__PURE__*/React.createElement(HomePage, null);
      case 'inbox':
        return /*#__PURE__*/React.createElement(InboxPage, null);
      case 'people':
        return /*#__PURE__*/React.createElement(PeoplePage, null);
      case 'payroll':
        return /*#__PURE__*/React.createElement(PayrollPage, null);
      case 'attendance':
        return /*#__PURE__*/React.createElement(AttendancePage, null);
      default:
        return /*#__PURE__*/React.createElement(EmptyPage, {
          name: titles[active][0]
        });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": `HRMS ${title}`,
    style: {
      display: 'flex',
      height: '100vh',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNav: nav
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: title,
    subtitle: subtitle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Page, null))));
}
function EmptyPage({
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 48,
      display: 'grid',
      placeItems: 'center',
      minHeight: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "construction",
    size: 40,
    color: "var(--fg-subtle)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      marginTop: 14
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--fg-muted)',
      marginTop: 8
    }
  }, "This module exists in HROne but isn't mocked in this UI kit. Click Home, Inbox, People, Attendance, or Payroll to see live screens.")));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hrms/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hrms/AttendancePage.jsx
try { (() => {
function AttendancePage() {
  const days = Array.from({
    length: 30
  }, (_, i) => {
    const rates = [98, 96, 94, 97, 92, 40, 30, 95, 96, 94, 97, 98, 95, 42, 31, 96, 97, 95, 94, 96, 98, 41, 29, 95, 97, 96, 94, 98, 43, 30];
    return {
      day: i + 1,
      rate: rates[i]
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--hrone-green)'
    }
  }, "April 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h1)',
      letterSpacing: '-0.015em',
      marginTop: 6
    }
  }, "Attendance")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leading: "calendar-days"
  }, "Switch month"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leading: "download"
  }, "Export roster")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, [['Present', '284', 'success'], ['On leave', '14', 'pending'], ['WFH', '10', 'brand'], ['Absent', '4', 'danger']].map(([l, v, t]) => /*#__PURE__*/React.createElement(Card, {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      color: 'var(--fg-subtle)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 32px/1.1 var(--font-display)',
      marginTop: 8,
      fontVariantNumeric: 'tabular-nums'
    }
  }, v)))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Org heatmap \xB7 last 30 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(30,1fr)',
      gap: 3
    }
  }, days.map(d => {
    const c = d.rate < 50 ? 'var(--ink-200)' : d.rate < 85 ? 'var(--green-300)' : d.rate < 95 ? 'var(--green-600)' : 'var(--green-1000)';
    return /*#__PURE__*/React.createElement("div", {
      key: d.day,
      title: `Day ${d.day}: ${d.rate}%`,
      style: {
        height: 34,
        background: c,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        color: '#fff',
        font: '500 9px/1 var(--font-body)',
        padding: 2
      }
    }, d.day);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 14,
      font: 'var(--text-caption)',
      color: 'var(--fg-subtle)',
      alignItems: 'center'
    }
  }, "Less ", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: 'var(--ink-200)',
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: 'var(--green-300)',
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: 'var(--green-600)',
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: 'var(--green-1000)',
      borderRadius: 3
    }
  }), " More")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, {
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Live")
  }, "Punch-ins right now"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Meera Raghavan', 'Bengaluru HQ', '09:42', 'success', 'Geo-verified'], ['Aarav Kapoor', 'Gurugram HQ', '09:47', 'success', 'Geo-verified'], ['Kabir Shah', 'Mumbai field', '10:02', 'peach', 'Field punch · Lower Parel'], ['Arjun Menon', 'Chennai office', '10:14', 'success', 'Geo-verified']].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 4px',
      borderBottom: i < 3 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r[0],
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-display)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--fg-muted)'
    }
  }, r[1], " \xB7 ", r[4])), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px/1 var(--font-body)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--fg)'
    }
  }, r[2]), /*#__PURE__*/React.createElement(Badge, {
    tone: r[3],
    dot: false
  }, "IN"))))));
}
window.AttendancePage = AttendancePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hrms/AttendancePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hrms/HomePage.jsx
try { (() => {
function HomePage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--hrone-green)',
      color: '#fff',
      borderRadius: 14,
      padding: '26px 28px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: 0.75
    }
  }, "Good morning"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 32px/1.15 var(--font-display)',
      letterSpacing: '-0.015em',
      marginTop: 6
    }
  }, "Priya \u2014 17 things want your attention today."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "orange",
    leading: "inbox"
  }, "Open Inbox"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leading: "calendar-days",
    style: {
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.28)',
      color: '#fff'
    }
  }, "View calendar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      color: 'var(--fg-subtle)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Present today"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 30px/1.1 var(--font-display)',
      marginTop: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "284 ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1 var(--font-body)',
      color: 'var(--fg-subtle)'
    }
  }, "/ 312")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.3 var(--font-body)',
      color: '#006b51',
      marginTop: 6
    }
  }, "\u25B2 4.2% vs last week")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      color: 'var(--fg-subtle)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "On leave"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 30px/1.1 var(--font-display)',
      marginTop: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "14"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.3 var(--font-body)',
      color: 'var(--fg-muted)',
      marginTop: 6
    }
  }, "8 casual \xB7 4 sick \xB7 2 earned")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      color: 'var(--fg-subtle)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Payroll pending"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 26px/1.1 var(--font-display)',
      marginTop: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "\u20B9 48,12,450"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.3 var(--font-body)',
      color: 'var(--fg-muted)',
      marginTop: 6
    }
  }, "March cycle \xB7 closes Apr 28")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      color: 'var(--fg-subtle)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Open roles"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 30px/1.1 var(--font-display)',
      marginTop: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "9"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.3 var(--font-body)',
      color: 'var(--fg-muted)',
      marginTop: 6
    }
  }, "47 applicants this week"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "View all")
  }, "My actions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [{
    who: 'Rohit Mehra',
    what: 'Casual leave · Apr 22–Apr 24',
    tag: 'Leave',
    tone: 'peach',
    icon: 'calendar-days'
  }, {
    who: 'Ananya Iyer',
    what: 'Expense claim · ₹ 8,420',
    tag: 'Expense',
    tone: 'pink',
    icon: 'receipt'
  }, {
    who: 'Kabir Shah',
    what: 'Reimbursement · Travel',
    tag: 'Expense',
    tone: 'pink',
    icon: 'receipt'
  }, {
    who: 'Zoya Khan',
    what: 'Offer approval · Backend Eng L4',
    tag: 'Recruit',
    tone: 'brand',
    icon: 'briefcase'
  }, {
    who: 'Devansh Rao',
    what: 'Probation confirmation',
    tag: 'HR',
    tone: 'peach',
    icon: 'user-check'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 4px',
      borderBottom: i < 4 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.who,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      fontWeight: 600
    }
  }, r.who), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--fg-muted)'
    }
  }, r.what)), /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    dot: false
  }, r.tag), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Review"))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Announcements"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: 'var(--peach-200)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      color: '#8b4a1f',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Policy update"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.35 var(--font-display)',
      marginTop: 4
    }
  }, "New WFH policy effective May 1"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--fg-muted)',
      marginTop: 4
    }
  }, "Two flexible days per week for tenured staff.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: 'var(--lime-100)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      color: '#006b51',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Celebration"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.35 var(--font-display)',
      marginTop: 4
    }
  }, "12 work-anniversaries this week"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--fg-muted)',
      marginTop: 4
    }
  }, "Send them a note from the Engagement tab.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: 'var(--pink-200)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-overline)',
      color: '#7a3c8b',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Reminder"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.35 var(--font-display)',
      marginTop: 4
    }
  }, "Form 16 distribution window"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--fg-muted)',
      marginTop: 4
    }
  }, "Opens April 30. Prep your team now."))))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hrms/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hrms/InboxPage.jsx
try { (() => {
function InboxPage() {
  const [selected, setSelected] = useState(0);
  const items = [{
    who: 'Rohit Mehra',
    dept: 'Engineering · L3',
    subject: 'Casual leave · Apr 22 → Apr 24 (3 days)',
    tag: 'Leave',
    tone: 'peach',
    time: '2h',
    icon: 'calendar-days',
    body: 'Going home for my sister\'s wedding. Handover doc shared with the team; Siddharth will cover the incident rotation.'
  }, {
    who: 'Ananya Iyer',
    dept: 'Growth · L2',
    subject: 'Expense claim · ₹ 8,420 · Client dinner',
    tag: 'Expense',
    tone: 'pink',
    time: '3h',
    icon: 'receipt',
    body: 'Dinner with the Paynearby team at Olive Qutub — receipts attached. Budget line: Q2 partnership entertainment.'
  }, {
    who: 'Kabir Shah',
    dept: 'Sales · L4',
    subject: 'Reimbursement · Travel · ₹ 14,280',
    tag: 'Expense',
    tone: 'pink',
    time: 'Yesterday',
    icon: 'plane',
    body: 'Mumbai client visit, return flight + cab. All receipts uploaded.'
  }, {
    who: 'Zoya Khan',
    dept: 'Engineering · Hiring',
    subject: 'Offer approval · Backend Eng L4 · ₹ 22 LPA',
    tag: 'Recruit',
    tone: 'brand',
    time: 'Yesterday',
    icon: 'briefcase',
    body: 'Candidate: Meera Raghavan. 6 YOE. Loop feedback unanimous. Comp within band, 7.5% over midpoint for counter.'
  }, {
    who: 'Devansh Rao',
    dept: 'Design · L2',
    subject: 'Probation confirmation',
    tag: 'HR',
    tone: 'peach',
    time: '2d',
    icon: 'user-check',
    body: 'Manager feedback positive across all six dimensions. Recommending confirmation effective May 1.'
  }, {
    who: 'Neha Bhatt',
    dept: 'People Ops',
    subject: 'Birthday wishes · 4 today',
    tag: 'Engage',
    tone: 'pink',
    time: '2d',
    icon: 'gift',
    body: 'Auto-drafted notes for today\'s birthdays. Review and send, or let it ship at 10:00 IST.'
  }, {
    who: 'Finance Team',
    dept: 'System',
    subject: 'PF contribution file · March ready',
    tag: 'Payroll',
    tone: 'brand',
    time: '3d',
    icon: 'file-text',
    body: 'ECR file generated. 312 employees, ₹ 18,24,720 total contribution. Upload to EPFO portal.'
  }];
  const active = items[selected];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'grid',
      gridTemplateColumns: '380px 1fr',
      gap: 16,
      height: 'calc(100vh - 64px)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "inbox",
    size: 18,
    color: "var(--hrone-green)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1 var(--font-display)'
    }
  }, "InboxforHR\u2122"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--text-caption)',
      color: 'var(--fg-subtle)'
    }
  }, "7 open \xB7 0 snoozed")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      display: 'flex',
      gap: 6,
      borderBottom: '1px solid var(--border)'
    }
  }, ['All', 'Leave', 'Expense', 'Recruit', 'Payroll'].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    style: {
      height: 28,
      padding: '0 10px',
      borderRadius: 999,
      border: '1px solid var(--border)',
      background: i === 0 ? 'var(--hrone-green)' : '#fff',
      color: i === 0 ? '#fff' : 'var(--fg-muted)',
      font: '500 12px/1 var(--font-body)',
      cursor: 'pointer'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setSelected(i),
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      cursor: 'pointer',
      background: selected === i ? 'var(--green-100)' : 'transparent',
      borderLeft: selected === i ? '3px solid var(--hrone-green)' : '3px solid transparent',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: it.who,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px/1.2 var(--font-display)',
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, it.who), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--fg-subtle)'
    }
  }, it.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--fg)',
      marginTop: 2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, it.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: it.tone,
    dot: false
  }, it.tag))))))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: active.who,
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      letterSpacing: '-0.01em'
    }
  }, active.who), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--fg-subtle)'
    }
  }, active.dept, " \xB7 ", active.time, " ago")), /*#__PURE__*/React.createElement(Badge, {
    tone: active.tone,
    dot: false
  }, active.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px/1.3 var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, active.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--fg)',
      marginTop: 14,
      maxWidth: 620
    }
  }, active.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: 18,
      background: 'var(--green-100)',
      borderRadius: 10,
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 20,
    color: "var(--hrone-green)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px/1.2 var(--font-display)',
      color: 'var(--hrone-green)'
    }
  }, "One AI summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--fg)',
      marginTop: 6
    }
  }, "Leave balance: 9 casual days remaining. No policy conflicts. Manager (Siddharth K.) already pre-approved. Safe to approve in one click."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leading: "check"
  }, "Approve"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leading: "message-square"
  }, "Ask a question"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leading: "clock"
  }, "Snooze"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    leading: "x"
  }, "Reject")))));
}
window.InboxPage = InboxPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hrms/InboxPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hrms/PayrollPage.jsx
try { (() => {
function PayrollPage() {
  const steps = [{
    n: 1,
    label: 'Attendance sync',
    done: true,
    desc: '312 records reconciled'
  }, {
    n: 2,
    label: 'Inputs & variables',
    done: true,
    desc: 'Overtime, bonuses, deductions'
  }, {
    n: 3,
    label: 'Review & approve',
    done: false,
    active: true,
    desc: '3 anomalies flagged'
  }, {
    n: 4,
    label: 'Disburse',
    done: false,
    desc: 'ACH + payslips + Form 16'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hr-eyebrow",
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--hrone-green)'
    }
  }, "March 2026 cycle"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h1)',
      letterSpacing: '-0.015em',
      marginTop: 6
    }
  }, "Run payroll"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--fg-muted)',
      marginTop: 4
    }
  }, "Closes ", /*#__PURE__*/React.createElement("b", null, "Apr 28"), " \xB7 312 employees \xB7 \u20B9 48,12,450 gross")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leading: "download"
  }, "Download worksheet"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leading: "play"
  }, "Continue")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      padding: '20px 22px',
      borderRight: i < 3 ? '1px solid var(--border)' : 'none',
      background: s.active ? 'var(--green-100)' : '#fff',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: s.done ? 'var(--hrone-green)' : s.active ? 'var(--hrone-green)' : 'var(--ink-100)',
      color: s.done || s.active ? '#fff' : 'var(--fg-muted)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 13px/1 var(--font-display)'
    }
  }, s.done ? '✓' : s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-display)',
      color: s.done || s.active ? 'var(--fg)' : 'var(--fg-muted)'
    }
  }, s.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--fg-muted)',
      marginTop: 8,
      marginLeft: 38
    }
  }, s.desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Review all")
  }, "Flagged for review"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [{
    who: 'Rohit Mehra',
    issue: 'Attendance variance · 3 days unmarked',
    delta: '−₹ 6,840',
    tone: 'pending'
  }, {
    who: 'Kabir Shah',
    issue: 'Overtime claim exceeds policy cap',
    delta: '+₹ 12,400',
    tone: 'danger'
  }, {
    who: 'Meera Raghavan',
    issue: 'Joining bonus prorated — confirm',
    delta: '+₹ 25,000',
    tone: 'brand'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 14px',
      border: '1px solid var(--border)',
      borderRadius: 10,
      background: 'var(--ink-50)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.who,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-display)'
    }
  }, r.who), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--fg-muted)'
    }
  }, r.issue)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1 var(--font-body)',
      color: r.tone === 'danger' ? '#c8392a' : r.tone === 'pending' ? '#8a5d00' : 'var(--hrone-green)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.delta), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Fix"))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Totals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['Gross pay', '₹ 48,12,450'], ['PF (employee)', '− ₹ 3,14,280'], ['TDS', '− ₹ 4,82,100'], ['Professional tax', '− ₹ 62,400'], ['Other deductions', '− ₹ 1,08,220']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--fg)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px/1 var(--font-display)'
    }
  }, "Net payable"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 20px/1 var(--font-display)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--hrone-green)'
    }
  }, "\u20B9 38,45,450"))))));
}
window.PayrollPage = PayrollPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hrms/PayrollPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hrms/PeoplePage.jsx
try { (() => {
function PeoplePage() {
  const people = [{
    name: 'Aarav Kapoor',
    role: 'Engineering Manager',
    loc: 'Gurugram',
    status: 'Present',
    tone: 'success',
    dept: 'Engineering'
  }, {
    name: 'Meera Raghavan',
    role: 'Senior Backend Engineer',
    loc: 'Bengaluru',
    status: 'Present',
    tone: 'success',
    dept: 'Engineering'
  }, {
    name: 'Siddharth Kulkarni',
    role: 'Staff Engineer',
    loc: 'Pune',
    status: 'On leave',
    tone: 'pending',
    dept: 'Engineering'
  }, {
    name: 'Priya Sharma',
    role: 'HR Manager',
    loc: 'Gurugram',
    status: 'Present',
    tone: 'success',
    dept: 'People Ops'
  }, {
    name: 'Ananya Iyer',
    role: 'Growth Analyst',
    loc: 'Mumbai',
    status: 'WFH',
    tone: 'brand',
    dept: 'Growth'
  }, {
    name: 'Kabir Shah',
    role: 'Sales Lead · West',
    loc: 'Mumbai',
    status: 'Field',
    tone: 'peach',
    dept: 'Sales'
  }, {
    name: 'Zoya Khan',
    role: 'Talent Partner',
    loc: 'Delhi',
    status: 'Present',
    tone: 'success',
    dept: 'People Ops'
  }, {
    name: 'Devansh Rao',
    role: 'Product Designer',
    loc: 'Bengaluru',
    status: 'Present',
    tone: 'success',
    dept: 'Design'
  }, {
    name: 'Rohit Mehra',
    role: 'Backend Engineer',
    loc: 'Noida',
    status: 'On leave',
    tone: 'pending',
    dept: 'Engineering'
  }, {
    name: 'Neha Bhatt',
    role: 'People Ops Associate',
    loc: 'Gurugram',
    status: 'Present',
    tone: 'success',
    dept: 'People Ops'
  }, {
    name: 'Arjun Menon',
    role: 'Finance Controller',
    loc: 'Chennai',
    status: 'Present',
    tone: 'success',
    dept: 'Finance'
  }, {
    name: 'Ishani Dutta',
    role: 'Content Strategist',
    loc: 'Kolkata',
    status: 'WFH',
    tone: 'brand',
    dept: 'Marketing'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: 320,
      height: 40,
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--fg-subtle)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search by name, ID, or email",
    style: {
      flex: 1,
      border: 0,
      background: 'transparent',
      outline: 'none',
      font: 'var(--text-body)'
    }
  })), ['All (312)', 'Engineering', 'People Ops', 'Sales', 'Design', 'Finance'].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    style: {
      height: 40,
      padding: '0 14px',
      borderRadius: 10,
      border: '1px solid var(--border)',
      background: i === 0 ? 'var(--hrone-green)' : '#fff',
      color: i === 0 ? '#fff' : 'var(--fg-muted)',
      font: '500 13px/1 var(--font-body)',
      cursor: 'pointer'
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leading: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leading: "user-plus"
  }, "Add employee"))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--ink-50)',
      textAlign: 'left'
    }
  }, ['Employee', 'Role', 'Department', 'Location', 'Status', ''].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      padding: '12px 16px',
      font: '600 11px/1.2 var(--font-body)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fg-subtle)',
      borderBottom: '1px solid var(--border)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, people.map((p, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i < people.length - 1 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 36
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-display)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--fg-subtle)'
    }
  }, "EMP-", (4000 + i).toString().padStart(5, '0'))))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      font: 'var(--text-body-sm)',
      color: 'var(--fg)'
    }
  }, p.role), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      font: 'var(--text-body-sm)',
      color: 'var(--fg-muted)'
    }
  }, p.dept), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      font: 'var(--text-body-sm)',
      color: 'var(--fg-muted)'
    }
  }, p.loc), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone
  }, p.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 16px',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: '1px solid var(--border)',
      background: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more-horizontal",
    size: 16,
    color: "var(--fg-muted)"
  })))))))));
}
window.PeoplePage = PeoplePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hrms/PeoplePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hrms/Shell.jsx
try { (() => {
const {
  useState
} = React;
function Sidebar({
  active,
  onNav
}) {
  const nav = [{
    id: 'home',
    label: 'Home',
    icon: 'home'
  }, {
    id: 'inbox',
    label: 'Inbox',
    icon: 'inbox',
    badge: 17
  }, {
    id: 'people',
    label: 'People',
    icon: 'users'
  }, {
    id: 'attendance',
    label: 'Attendance',
    icon: 'clock'
  }, {
    id: 'payroll',
    label: 'Payroll',
    icon: 'indian-rupee'
  }, {
    id: 'performance',
    label: 'Performance',
    icon: 'bar-chart-3'
  }, {
    id: 'recruit',
    label: 'Recruitment',
    icon: 'briefcase'
  }, {
    id: 'engage',
    label: 'Engagement',
    icon: 'sparkles'
  }, {
    id: 'helpdesk',
    label: 'Helpdesk',
    icon: 'life-buoy'
  }, {
    id: 'assets',
    label: 'Assets',
    icon: 'package'
  }, {
    id: 'reports',
    label: 'Reports',
    icon: 'file-text'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      background: 'var(--hrone-green)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px 28px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/hrone-logo-white.png",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '0 10px',
      position: 'relative'
    }
  }, nav.map(n => {
    const isActive = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 10,
        border: 0,
        cursor: 'pointer',
        background: isActive ? 'rgba(255,255,255,0.14)' : 'transparent',
        color: '#fff',
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        fontWeight: isActive ? 600 : 500,
        fontSize: 14,
        transition: 'background 120ms'
      },
      onMouseEnter: e => !isActive && (e.currentTarget.style.background = 'rgba(255,255,255,0.08)'),
      onMouseLeave: e => !isActive && (e.currentTarget.style.background = 'transparent')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, n.label), n.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--hrone-orange)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 700,
        padding: '2px 7px',
        borderRadius: 999
      }
    }, n.badge));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 14,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Priya Sharma",
    color: "#fbb887",
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13
    }
  }, "Priya Sharma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.7
    }
  }, "HR Manager \xB7 Lumino")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-up",
    size: 16,
    style: {
      opacity: 0.7
    }
  })));
}
function TopBar({
  title,
  subtitle
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'saturate(180%) blur(12px)',
      borderBottom: '1px solid var(--border)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      letterSpacing: '-0.01em'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--fg-subtle)',
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: 340,
      height: 40,
      background: 'var(--ink-100)',
      borderRadius: 10,
      padding: '0 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--fg-subtle)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search employees, policies, payslips\u2026",
    style: {
      flex: 1,
      border: 0,
      background: 'transparent',
      outline: 'none',
      font: 'var(--text-body)',
      color: 'var(--fg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--fg-subtle)',
      border: '1px solid var(--border)',
      borderRadius: 4,
      padding: '2px 6px',
      background: '#fff'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      border: '1px solid var(--border)',
      background: '#fff',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18,
    color: "var(--fg-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 9,
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--hrone-orange)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "orange",
    size: "sm",
    leading: "mic"
  }, "Ask One AI"));
}
Object.assign(window, {
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hrms/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hrms/primitives.jsx
try { (() => {
// Shared UI primitives for the HROne HRMS kit
const {
  useState
} = React;
function Icon({
  name,
  size = 18,
  color,
  stroke = 2,
  style
}) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': stroke
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      color,
      ...style
    }
  });
}
function Button({
  variant = 'primary',
  size = 'md',
  children,
  leading,
  trailing,
  onClick,
  style
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    border: 0,
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: 0,
    borderRadius: 10,
    transition: 'background 140ms ease, box-shadow 140ms ease',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      height: 32,
      padding: '0 12px',
      fontSize: 12
    },
    md: {
      height: 40,
      padding: '0 16px',
      fontSize: 14
    },
    lg: {
      height: 48,
      padding: '0 22px',
      fontSize: 15,
      fontWeight: 600
    }
  };
  const variants = {
    primary: {
      background: 'var(--hrone-green)',
      color: '#fff'
    },
    secondary: {
      background: '#fff',
      color: 'var(--fg)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--hrone-green)',
      fontWeight: 600
    },
    danger: {
      background: '#c8392a',
      color: '#fff'
    },
    orange: {
      background: 'var(--hrone-orange)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, leading && /*#__PURE__*/React.createElement(Icon, {
    name: leading,
    size: size === 'sm' ? 14 : 16
  }), children, trailing && /*#__PURE__*/React.createElement(Icon, {
    name: trailing,
    size: size === 'sm' ? 14 : 16
  }));
}
function Badge({
  tone = 'neutral',
  children,
  dot = true
}) {
  const tones = {
    neutral: {
      bg: 'var(--ink-100)',
      fg: 'var(--ink-700)',
      dot: 'var(--ink-500)'
    },
    success: {
      bg: 'var(--lime-100)',
      fg: '#006b51',
      dot: '#009f78'
    },
    pending: {
      bg: 'var(--yellow-200)',
      fg: '#8a5d00',
      dot: '#c98a00'
    },
    danger: {
      bg: 'var(--orange-100)',
      fg: '#a52e1e',
      dot: '#c8392a'
    },
    brand: {
      bg: 'var(--green-100)',
      fg: 'var(--hrone-green)',
      dot: 'var(--hrone-green)'
    },
    peach: {
      bg: 'var(--peach-300)',
      fg: '#8b4a1f',
      dot: 'var(--hrone-orange)'
    },
    pink: {
      bg: 'var(--pink-200)',
      fg: '#7a3c8b',
      dot: 'var(--pink-1000)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 999,
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1.3
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: t.dot
    }
  }), children);
}
function Avatar({
  name = '',
  color,
  size = 32,
  src
}) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const palette = ['#02563d', '#e56046', '#009f78', '#dd9ade', '#f8d772', '#fbb887'];
  const bg = color || palette[(name.charCodeAt(0) || 0) % palette.length];
  if (src) return /*#__PURE__*/React.createElement("img", {
    src: src,
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      objectFit: 'cover'
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: bg,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 0.36,
      flexShrink: 0
    }
  }, initials || '?');
}
function Card({
  children,
  padding = 20,
  style,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 14,
      boxShadow: 'var(--shadow-sm)',
      padding,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, children);
}
function SectionLabel({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-h3)',
      letterSpacing: '-0.01em'
    }
  }, children), action);
}
Object.assign(window, {
  Icon,
  Button,
  Badge,
  Avatar,
  Card,
  SectionLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hrms/primitives.jsx", error: String((e && e.message) || e) }); }

})();
