import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item;

class FormDemo extends React.Component {

  componentDidMount () {

    // 异步设置编辑器内容
    setTimeout(() => {
      this.props.form.setFieldsValue({
        content: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
      })
    }, 1000)

  }

  handleSubmit = (event) => {
    let {saveContent} = this.props;
    event.preventDefault()
    this.props.form.validateFields((error, values) => {
      if (!error) {
        const submitData = {
          title: values.title,
          content: values.content.toHTML() // or values.content.toRAW()
        }
        console.log(submitData)

        saveContent(submitData)

      }
    })

  }

  render () {

    const { getFieldDecorator } = this.props.form
    const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media' ]

    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

    return (
      <div className="editor-container">
        <Form onSubmit={this.handleSubmit}>
          <FormItem  label="文章标题">
            {getFieldDecorator('title', {
              rules: [{
                required: true,
                message: '请输入标题',
              }],
            })(
              <Input size="large" placeholder="请输入标题"/>
            )}
          </FormItem>
          <FormItem  label="文章正文">
            {getFieldDecorator('content', {
              validateTrigger: 'onBlur',
              rules: [{
                required: true,
                validator: (_, value, callback) => {
                  if (value.isEmpty()) {
                    callback('请输入正文内容')
                  } else {
                    callback()
                  }
                }
              }],
            })(
              <BraftEditor
                className="my-editor"
                controls={controls}
                media={{uploadFn:this.myUploadFn}}
                placeholder="请输入正文内容"
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout}>
            <Button size="large" type="primary" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    )

  }

  myUploadFn = (param)=>{
    let uploadUrl = 'http://localhost:3001/upload';
    let xhr = new XMLHttpRequest();
    let form = new FormData();

    let uploadComplete =(response)=>{
      console.log('uploadcomplete ***',xhr.response)
      let result = JSON.parse(xhr.response||{});
      param.success({
        url:result.data
      })
    }

    let uploadFailed =(response)=>{
      param.error({
        msg:'upload failed'
      })
    }

    let onProgress =(event)=>{
      console.log('onProgress *** event',event)
        param.progress(event.loaded / event.total * 100)
    }

    form.append('file', param.file);
    xhr.open('POST',uploadUrl,true)
    xhr.onload = uploadComplete;
    xhr.onerror = uploadFailed;
    xhr.upload.onprogress = onProgress;

    xhr.send(form);
    console.log('myUploadFn param ***',param)

  }

}

export default Form.create()(FormDemo)