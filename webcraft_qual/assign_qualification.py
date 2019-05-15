#!/usr/bin/python

import argparse
import re
from mturk import MTurk
import time


def verify(actions, labels):
    tokens = re.split('\(|\)', labels)
    tokens = [t.strip().lower() for t in tokens]
    n_walls = tokens.count("wall")
    n_windows = tokens.count("window")
    n_roofs = tokens.count("roof")
    n_doors = tokens.count("door")
    n_fences = tokens.count("fence")

    wall_blocks = 0
    window_blocks = 0
    roof_blocks = 0
    door_blocks = 0
    fence_blocks = 0
    try:
        for i in range(len(tokens)):
            if tokens[i] == "wall":
                wall_blocks += int(tokens[i + 1])
            if tokens[i] == "window":
                window_blocks += int(tokens[i + 1])
            if tokens[i] == "roof":
                roof_blocks += int(tokens[i + 1])
            if tokens[i] == "door":
                door_blocks += int(tokens[i + 1])
            if tokens[i] == "fence":
                fence_blocks += int(tokens[i + 1])
    except:
        # print("==> Exception!!")
        # print("==> " + labels)
        return False # parsing fails

    return n_walls >= 4 \
        and n_walls <= 8 \
        and n_windows >= 4 \
        and n_windows <= 12 \
        and n_roofs >= 1 \
        and n_roofs <= 8 \
        and n_doors >= 1 \
        and n_doors <= 3 \
        and n_fences >= 2 \
        and n_fences <= 6 \
        and wall_blocks >= 50 \
        and wall_blocks <= 150 \
        and window_blocks >= 8 \
        and window_blocks <= 50 \
        and roof_blocks >= 100 \
        and door_blocks <= 20 \
        and fence_blocks >= 50


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="publich batch")
    parser.add_argument('--live', action='store_true', help='live marketplace')
    args = parser.parse_args()

    mturk = MTurk(not args.live)

    with open("results.csv", "r") as f:
        lines = f.read().splitlines()

    keys = lines[0].split('"')
    worker_idx = keys.index('WorkerId')
    actions_idx = keys.index('Answer.actions')
    labels_idx = keys.index('Answer.labels')

    with open("granted_workers.txt", "r") as f:
        granted_workers = set(f.read().splitlines())

    print("Granted workers:")
    print(len(granted_workers))
    print(granted_workers)
    print("Workers to grant:")
    for l in lines[1:]:
        lst = l.split('"')
        worker = lst[worker_idx]
        actions = lst[actions_idx]
        labels = lst[labels_idx]
        if (worker not in granted_workers) and verify(actions, labels):
            print(worker)
            granted_workers.add(worker)
            mturk.associate_qualification_with_worker(worker)
            time.sleep(1)

    with open("granted_workers.txt", "w") as f:
        for w in granted_workers:
            f.write(w + "\n")
