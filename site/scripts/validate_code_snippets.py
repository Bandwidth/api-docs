"""
validate_code_snippets.py

Validates the language code snippets. This really only checks for proper syntax; API integration tests
that are order dependent will be handled in the SDK repos.

The exit code of running each code snippet Take note that code snippets cannot have a non 0 exit
"""
import os

CODE_SNIPPETS_PATH = "site/code-snippets"


def main(extension, cli_exec_command, skip_files):
    """
    Main function

    Args:
        extension (str): The file extension to search for (ex: py, rb)
        cli_exec_command (str): The command to run to execute the file (ex: python, ruby)
        skip_files (list<str>): A list of files to skip validation on
    """
    #Use `find` to list all the files in the code snippets.
    #`find` lists the files separated by \n, so we split on that, and we remove the
    #last element because an extra '' is thrown in for some reason.
    code_files = os.popen("find {code_snippets_path} -name \"*.{extension}\"".format(code_snippets_path=CODE_SNIPPETS_PATH, extension=extension)).read().split("\n")[0:-1]

    #Execute each file
    success = True
    for code_file in code_files:
        if (not code_file in skip_files) and (not "node_modules" in code_file):
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
    skip_files = None
    try:
        extension = sys.argv[1]
        cli_exec_command = sys.argv[2]
        skip_files = sys.argv[3:]
    except:
        print("Usage: python validate_code_snippets.py <extension> <cli_exec_command> <skip_files>")
        exit(1)
    main(extension, cli_exec_command, skip_files)
