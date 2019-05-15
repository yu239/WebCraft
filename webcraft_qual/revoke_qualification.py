#!/usr/bin/python

import argparse
from mturk import MTurk


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="publich batch")
    parser.add_argument('--live', action='store_true', help='live marketplace')
    args = parser.parse_args()

    mturk = MTurk(not args.live)
    mturk.revoke_qualification()
