import os

root = os.path.dirname(os.path.abspath(__file__))

removals = [
    '\n<link rel=\\"preconnect\\" href=\\"https:\\/\\/fonts.googleapis.com\\">\n<link rel=\\"preconnect\\" href=\\"https:\\/\\/fonts.gstatic.com\\" crossorigin>\n<link href=\\"https:\\/\\/fonts.googleapis.com\\/css2?family=Lato:wght@300;400;500;600;700&display=swap\\" rel=\\"stylesheet\\">\n\n',
    "  \\/* 1. Import Lato *\\/\\n  @import url('https:\\/\\/fonts.googleapis.com\\/css2?family=Lato:wght@400;500;600&display=swap');\\n\\n",
]

changed = []
for dirpath, _, filenames in os.walk(os.path.join(root, "templates")):
    for name in filenames:
        if not name.endswith(".json"):
            continue
        path = os.path.join(dirpath, name)
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        original = content
        for block in removals:
            content = content.replace(block, "")
        if content != original:
            with open(path, "w", encoding="utf-8", newline="") as f:
                f.write(content)
            changed.append(os.path.relpath(path, root))

print(f"Changed {len(changed)} files")
for p in sorted(changed):
    print(p)
