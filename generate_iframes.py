#!/usr/bin/python

import os
import glob
import numpy as np


def verify_house(house):
    if "jgray" in house:
        return False

    cube = np.load(house)
    X, Y, Z, _ = cube.shape
    ## for now, we just discard houses that have a size greater than 32
    if X > 32 or Y > 32 or Z > 32:
        return False
    if X * Y * Z < 27:
        return False

    return True


if __name__ == "__main__":
    houses = glob.glob("data/minecraft_houses/*/schematic.npy")
    with open("singleplayer.html", "r") as f:
        template = f.read()

    iframe_urls = []
    for h in houses:
        if not verify_house(h):
            continue

        iframe = template.replace("data/schematic.npy", h)
        name = os.path.basename(os.path.dirname(h))
        with open("{}.html".format(name), "w") as f:
            f.write(iframe)
        iframe_urls.append("https://dl.fbaipublicfiles.com/minecraftvision/WebCraft/{}.html".format(name))

    with open("iframes.csv", "w") as f:
        f.write("iframe_url\n")
        for url in iframe_urls:
            f.write(url + "\n")

    print(len(iframe_urls))
