webpackJsonp([161],{1730:function(t,e){t.exports={content:["section",["p","Modal dialogs."],["h2","When To Use"],["p","When requiring users to interact with the application, but without jumping to a new page and interrupting\nthe user's workflow, you can use ",["code","Modal"]," to create a new floating layer over the current page to get user\nfeedback or display information.\nAdditionally, if you need show a simple confirmation dialog, you can use ",["code","antd.Modal.confirm()"],",\nand so on."]],meta:{type:"Feedback",category:"Components",title:"Modal",filename:"components/modal/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","afterClose"],["td","Specify a function that will be called when modal is closed completely."],["td","function"],["td","-"]],["tr",["td","bodyStyle"],["td","Body style for modal body element. Such as height, padding etc."],["td","object"],["td","{}"]],["tr",["td","cancelText"],["td","Text of the Cancel button"],["td","string"],["td",["code","Cancel"]]],["tr",["td","closable"],["td","Whether a close (x) button is visible on top right of the modal dialog or not"],["td","boolean"],["td","true"]],["tr",["td","confirmLoading"],["td","Whether to apply loading visual effect for OK button or not"],["td","boolean"],["td","false"]],["tr",["td","destroyOnClose"],["td","Whether to unmount child compenents on onClose"],["td","boolean"],["td","false"]],["tr",["td","footer"],["td","Footer content, set as ",["code","footer={null}"]," when you don't need default buttons"],["td","string","|","ReactNode"],["td","OK and Cancel buttons"]],["tr",["td","getContainer"],["td","Return the mount node for Modal"],["td","(instance): HTMLElement"],["td","() => document.body"]],["tr",["td","mask"],["td","Whether show mask or not."],["td","Boolean"],["td","true"]],["tr",["td","maskClosable"],["td","Whether to close the modal dialog when the mask (area outside the modal) is clicked"],["td","boolean"],["td","true"]],["tr",["td","maskStyle"],["td","Style for modal's mask element."],["td","object"],["td","{}"]],["tr",["td","okText"],["td","Text of the OK button"],["td","string"],["td",["code","OK"]]],["tr",["td","okType"],["td","Button ",["code","type"]," of the OK button"],["td","string"],["td",["code","primary"]]],["tr",["td","style"],["td","Style of floating layer, typically used at least for adjusting the position."],["td","object"],["td","-"]],["tr",["td","title"],["td","The modal dialog's title"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","visible"],["td","Whether the modal dialog is visible or not"],["td","boolean"],["td","false"]],["tr",["td","width"],["td","Width of the modal dialog"],["td","string","|","number"],["td","520"]],["tr",["td","wrapClassName"],["td","The class name of the container of the modal dialog"],["td","string"],["td","-"]],["tr",["td","zIndex"],["td","The ",["code","z-index"]," of the Modal"],["td","Number"],["td","1000"]],["tr",["td","onCancel"],["td","Specify a function that will be called when a user clicks mask, close button on top right or Cancel button"],["td","function(e)"],["td","-"]],["tr",["td","onOk"],["td","Specify a function that will be called when a user clicks the OK button"],["td","function(e)"],["td","-"]]]],["h4","Note"],["blockquote",["p","The state of Modal will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state everytime, set ",["code","destroyOnClose"]," on it."]],["h3","Modal.method()"],["p","There are five ways to display the information based on the content's nature:"],["ul",["li",["p",["code","Modal.info"]]],["li",["p",["code","Modal.success"]]],["li",["p",["code","Modal.error"]]],["li",["p",["code","Modal.warning"]]],["li",["p",["code","Modal.confirm"]]]],["p","The items listed above are all functions, expecting a settings object as parameter.\nThe properties of the object are follows:"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","cancelText"],["td","Text of the Cancel button"],["td","string"],["td",["code","Cancel"]]],["tr",["td","className"],["td","className of container"],["td","string"],["td","-"]],["tr",["td","content"],["td","Content"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","iconType"],["td","Icon ",["code","type"]," of the Icon component"],["td","string"],["td",["code","question-circle"]]],["tr",["td","maskClosable"],["td","Whether to close the modal dialog when the mask (area outside the modal) is clicked"],["td","Boolean"],["td",["code","false"]]],["tr",["td","okText"],["td","Text of the OK button"],["td","string"],["td",["code","OK"]]],["tr",["td","okType"],["td","Button ",["code","type"]," of the OK button"],["td","string"],["td",["code","primary"]]],["tr",["td","title"],["td","Title"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","width"],["td","Width of the modal dialog"],["td","string","|","number"],["td","416"]],["tr",["td","zIndex"],["td","The ",["code","z-index"]," of the Modal"],["td","Number"],["td","1000"]],["tr",["td","onCancel"],["td","Specify a function that will be called when the user clicks the Cancel button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed"],["td","function"],["td","-"]],["tr",["td","onOk"],["td","Specify a function that will be called when the user clicks the OK button. The parameter of this function is a function whose execution should include closing the dialog. You can also just return a promise and when the promise is resolved, the modal dialog will also be closed"],["td","function"],["td","-"]]]],["p","All the ",["code","Modal.method"],"s will return a reference, and then we can close the modal dialog by the reference."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> ref <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nref<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","const ref = Modal.info();\nref.destroy();"]],["style","\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n}\n"]]}}});