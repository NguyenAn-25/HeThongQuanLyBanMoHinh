import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
export interface TiptapNode {
    type: string;
    attrs?: Record<string, any>;
    content?: TiptapNode[];
    text?: string;
    marks?: {
        type: string;
        attrs?: Record<string, any>;
    }[];
}

export interface RichTextJSON {
    type: 'doc';
    content: TiptapNode[];
}

export interface JsonContentRendererProps {
    jsonData?: RichTextJSON;
}

export function JsonContentRenderer({ jsonData }: JsonContentRendererProps) {
    const editor = useEditor({
        editable: false,
        content: jsonData,
        extensions: [
            StarterKit,
            Image,
        ],
    }, [jsonData]);

    return (
        <div className="w-full bg-white">
            <EditorContent
                editor={editor}
            />
        </div>
    );
};