"""
validate_code_snippets.py

Validates the language code snippets. If files need to be ran in a specific order, they should be labeled as <file><index>.<extension>
"""
import os

CODE_SNIPPETS_PATH = "site/code-snippets"

def code_snippet_sort_key(e):
    """
    Forces the sort to be based on the filename in the format <file><index>.<extension>
    instead of the full file path CODE_SNIPPETS_PATH/<file><index>.<extension>.

    This allows us to force the order of files across different operations for things
    that need to be in a specific order.
    """
    return e.split("/")[-1]

def main(extension, cli_exec_command):
    """
    Main function

    Args:
        extension (str): The file extension to search for (ex: py, rb)
        cli_exec_command (str): The command to run to execute the file (ex: python, ruby)
    """
    #Use `find` to list all the files in the code snippets.
    #`find` lists the files separated by \n, so we split on that, and we remove the
    #last element because an extra '' is thrown in for some reason.
    #Then we sort with the code_snippet_sort_key to get our desired order
    code_files = os.popen("find {code_snippets_path} -name \"*.{extension}\"".format(code_snippets_path=CODE_SNIPPETS_PATH, extension=extension)).read().split("\n")[0:-1]
    code_files.sort(key=code_snippet_sort_key)

    #Execute each file
    success = True
    for code_file in code_files:
        response_code = os.system("{cli_exec_command} {code_file}".format(cli_exec_command=cli_exec_command, code_file=code_file))
        if response_code != 0:
            print(code_file + " returned code " + str(response_code))
            success = False
    if success:
        exit(0)
    else:
        exit(1)

if __name__ == '__main__':
    import sys
    extension = None
    cli_exec_command = None
    try:
        extension = sys.argv[1]
        cli_exec_command = sys.argv[2]
    except:
        print("Usage: python validate_code_snippets.py <extension> <cli_exec_command>")
        exit(1)
    main(extension, cli_exec_command)
