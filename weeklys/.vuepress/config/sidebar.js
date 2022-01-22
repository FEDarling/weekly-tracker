const tool = require("./tool");

const css = {
	name: "CSS Weekly",
	path: "/css_weekly/",
	pages: {
		486: ["has_selector", "cutsom_properties"]
	}
}
const js = {
	name: "JavaScript Weekly",
	path: "/javascript_weekly/",
	pages: {
		399: ["js_engine_shape_and_inline_caches", "js_engine_optimizing_prototype"],
		523: ["undefined_VS_null"],
		554: ["ES2022_Feature_Class_Static_Initialization_Blocks"],
		570: ["build_tools_compare", "ES2021_new_feature", "svelte_vs_react", "ternary"]
	}
}
const front = {
	name: "Frontend Focus",
	path: "/frontend_focus/",
	pages: {
		523: ["frontend_web_performance"]
	}
}
const node = {
	name: "Node Weekly",
	path: "/node_weekly/",
	pages: {
		417: ["Nodejs_memory_limits_what_you_should_know"],
		419: ["Nodejs_Framework_Selection_Guide"]
	}
}
const react = {
	name: "React Status",
	path: "/react_status/",
	pages: {
		271: ["A_Visual_Guide_to_useEffect"]
	}
}
const mobile = {
	name: "Mobile Dev Weekly",
	path: "/mobile_dev_weekly/",
	pages: {
		382: ["webrtc"],
		383: ["bashful_button", "modile_first_or_desktop_first"]
	}
}

// const result = tool.formatSideBar([css, js, front, react, mobile, node])

module.exports = 
{
	[`${js.path}`]: [{
        title: 'JS # 399',   // 必要的
        path: `${js.path}399/`,      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
			`${js.path}399/js_engine_optimizing_prototype.md`,
			`${js.path}399/js_engine_shape_and_inline_caches.md`
        ]
      },
	  {
        title: 'JS #523',   // 必要的
        path: `${js.path}523/`,      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
			`${js.path}523/undefined_VS_null.md`
        ]
      }
	  ,
	  {
        title: 'JS #554',   // 必要的
        path: `${js.path}554/`,      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
			`${js.path}554/ES2022_Feature_Class_Static_Initialization_Blocks.md`
        ]
      }
	  ,
	  {
        title: 'JS #570',   // 必要的
        path: `${js.path}570/`,      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,
		sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
			`${js.path}570/build_tools_compare.md`,
			`${js.path}570/ES2021_new_feature.md`,
			`${js.path}570/svelte_vs_react.md`,
			`${js.path}570/ternary.md`
        ]
      }],
	// '/frontend_focus/': formatSideBar(front),
	// '/javascript_weekly/': formatSideBar(js),
	// '/mobile_dev_weekly': formatSideBar(front)(mobile),
	// '/node_weekly/': formatSideBar(node),
	// '/react_status_weekly/': formatSideBar(react),
}