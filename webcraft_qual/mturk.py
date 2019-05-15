import boto3
import xmltodict


class MTurk(object):
###### sandbox ##########
#    MTURK_SANDBOX = 'https://mturk-requester-sandbox.us-east-1.amazonaws.com'
#    ACCESS_KEY = 'AKIAJZELXUJ7BU6BGKGA'
#    SECRET_KEY = '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'
#    QUAL_TYPEID = "3D7IKCYTLTMXF4WU15WR72DWKTQNMG"
######## live marketplace #########
    ACCESS_KEY = 'AKIAIVNSHI55YN4VWRXQ'
    SECRET_KEY = '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'
#    QUAL_TYPEID = "332K4KOFDMPRQEYAN6VOZ4WTAXR0DX"
    QUAL_TYPEID = "3HHPXX6GR7J5DN1CVIEOMJNP6LMJBH"

    def __init__(self, sandbox):
        opts = dict(aws_access_key_id=self.ACCESS_KEY,
                    aws_secret_access_key=self.SECRET_KEY,
                    region_name='us-east-1')
        if sandbox:
            opts["endpoint_url"] = self.MTURK_SANDBOX

        self.client = boto3.client('mturk', **opts)

    def list_workers_with_qualification(self):
        quals = self.client.list_workers_with_qualification_type(
            QualificationTypeId=self.QUAL_TYPEID,
            Status="Granted")
        workers = []
        for q in quals["Qualifications"]:
            worker_id = q["WorkerId"]
            workers.append(worker_id)
        return workers

    def associate_qualification_with_worker(self, worker_id):
        self.client.associate_qualification_with_worker(
            QualificationTypeId=self.QUAL_TYPEID,
            IntegerValue=1,
            WorkerId=worker_id,
            SendNotification=True)

    def revoke_qualification(self):
        workers = self.list_workers_with_qualification()
        print(workers)
        for worker_id in workers:
            self.client.disassociate_qualification_from_worker(
                QualificationTypeId=self.QUAL_TYPEID,
                WorkerId=worker_id)


if __name__ == "__main__":
    mturk = MTurk(sandbox=True)
    print("Account balance: {}".format(mturk.get_balance()))
