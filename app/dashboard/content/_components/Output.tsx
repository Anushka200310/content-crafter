import { Button } from '@/components/ui/button';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface PROPS{
  aiContent: string
}

const Output = ({aiContent}:PROPS) => {
  const editorRef:any = useRef();
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiContent);
    
  }, [aiContent])
  
  return (
    <div className='shadow-md rounded-lg border'>
      <div className='flex items-center justify-between p-3'>
        <h1 className='font-medium text-lg'>Your Result</h1>
        <Button onClick={()=>navigator.clipboard.writeText(aiContent)} className='flex items-center gap-2'><Copy className='w-4 h-4' />Copy</Button>
      </div>
       <Editor
       ref={editorRef}
        initialValue="Your result will appear here"
       // previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default Output;