import './styling/inputTEXTAREA.css'
import { useRef } from 'react';

function p_handle(){}
function img_handle(){}
function code_handle(){}
function default_handle(string, sect){

}

const InputTEXTAREA = ({ updateBody }) => {
    const body = useRef([]);
    const sect = useRef([{type: "", value: ""}]);
    //{/* Look into useLayoutEffect */}

    const parse = input => {
        const string = input.target.value;
        //console.log(string);

        switch(sect['type']){
            case 'p':
                break;
            case 'img':
                break;
            case 'code':
                break;
            default:
                default_handle(string, sect);
                break;
        }

        updateBody(string);
    }

    return (
        <textarea placeholder='Write Document Body Here...'
            id='body'
            name='body'
            required

            onInput={parse}
            onKeyDown={k => console.log(k.key)}
            className="Create-TA"
            />
    )
}

export default InputTEXTAREA;

/*
'Suppose that this is a sample text paragraph. The texts written here will be displayed plainly with little styling or animation.\nThis should be a part of the same paragraph; only broken up with a singular line space.\n\nThis text on the other hand should be a completely separate paragraph. A line space should separate the two.\n\nThe purpose of writing this text is to have a testing prompt to ensure that the display function and document create-body function works properly.\n\nThe following is a code block.\n```\n    int main() {\n        printf("Hello World!");\n        \n        return 0;\n    }\n```\nThe following is an image section. An image is designated by ![]() in a sole line. The text in the squared brackets, [], is the alt-text of the image. The text in the parathesis, (), is the path to the image. This path can be a URL or a local upload via the image file name.\n\n![This is the alt text](/This/Is/The/Source.txt)\n![Another image](/Just/To/Make/Sure/The/Two/Play/Nicely.pn)\n\n#A Header\n\nAnother test paragraph'

[
    {
        type: 'p',
        value: [
            'Suppose that this is a sample text paragraph. The texts written here will be displayed plainly with little styling or animation.',
            'This should be a part of the same paragraph; only broken up with a singular line space.'
        ]
    },
    {
        type: 'p',
        value: [
            'This text on the other hand should be a completely separate paragraph. A line space should separate the two.'
        ]
    },
    {
        type: 'p',
        value: [
            'The purpose of writing this text is to have a testing prompt to ensure that the display function and document create-body function works properly.'
        ]
    },
    {
        type: 'p',
        value: [
            'The following is a code block.'
        ]
    },
    {
        type: 'code',
        value: [
            '',                                                             // the language
            '\nint main() {\n\tprintf("Hello World!");\n\t\n\treturn 0;\n}' // the code
        ]
    },
    {
        type: 'p',
        value: [
            'The following is an image section. An image is designated by ![]() in a sole line. The text in the squared brackets, [], is the alt-text of the image. The text in the parathesis, (), is the path to the image. This path can be a URL or a local upload via the image file name.'
        ]      
    },
    {
        type: 'img',
        value: [
            'This is the alt text'          // alt text
            '(/This/Is/The/Source.txt)'     // image source
        ]
    },
    {
        type: 'img',
        value: [
            'Another image',
            '/Just/To/Make/Sure/The/Two/Play/Nicely.pn'
        ]
    },
    {
        type: 'hdr',
        value: [
            'A Header'
        ]
    },
    {
        type: 'p',
        value: [
            'Another test paragraph'
        ]
    }
]
*/